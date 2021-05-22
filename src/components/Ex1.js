import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchData from './SearchData.js'
import { Paper, Grid, Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import UserDate from './UserDate.js';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
    width: "100%",
    background: `url(${process.env.PUBLIC_URL + '/image.jpg'})`
  },
  grid: {
    paddingLeft: "100px",
    paddingTop: "50px"
  },
  detailText: {
    paddingLeft: '10px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#363f48',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '7px',
    border: 'outset',
    borderWidth: 'thick',
    borderColor: '#2d2f31',
    width: '30%'
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  heading: {
    paddingLeft: '550px',
    color: '#cdff62',
    fontFamily: 'fantasy',
    textDecoration: 'underline'
  },
}));

function Ex1(props) {
  const classes = useStyles();

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const [playerData, setPlayerData] = useState({});
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchPlayerData = async () => {
    const url = `https://api.npoint.io/20c1afef1661881ddc9c`;
    const { data } = await axios.get(url);
    setPlayerData(data);
  };

  if (playerData.playerList) {
    var fetchPlayerData2 = playerData.playerList.map((tid) => {
      return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={process.env.PUBLIC_URL + "/" + tid.Id + ".jpg"}
            title={tid.Id}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h4">
              {tid.PFName}
            </Typography>
            <Typography gutterBottom variant="h5">
              Value: ${(parseFloat(tid.Value) * 1000000).toString()}
            </Typography>
            <Typography>
              Skill: {tid.SkillDesc}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography gutterBottom variant="h6" className={classes.detailText}> Next Match Details </Typography> <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {tid.UpComingMatchesList.map((mid) => (
                <>
                  <Typography paragraph> {mid.CCode} Vs {mid.VsCCode}</Typography>
                  <UserDate dateString={mid.MDate}></UserDate>
                </>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      )
    })
  }

  return (
    <>
      {playerData &&
        <Paper className={classes.paper}>
          <Grid container spacing={3} className={classes.grid}>
            {<SearchData searchedPlayer={props.searchedPlayer} playerData={playerData} />}
          </Grid>
          <Divider component="li" variant="inset" />
          <Grid container spacing={3} className={classes.grid}>
            <Typography variant="h1" className={classes.heading}> All Players: </Typography>
          </Grid>
          <Grid container spacing={3} className={classes.grid}>
            {fetchPlayerData2}
          </Grid>
        </Paper>}
    </>
  );
};

export default Ex1;