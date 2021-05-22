import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserDate from './UserDate.js';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        width: "100%",
        paddingTop: "30px",
        paddingLeft: "30px",
        background: "space"
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
    detailText: {
        paddingLeft: '9px',
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
}));
function SearchData(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    if (props.playerData.playerList) {
        var fetchSearchedPlayer = props.playerData.playerList.map((tid) => {
            if ((tid.TName.toLowerCase() === props.searchedPlayer.toLowerCase()) || (tid.PFName.toLowerCase() === props.searchedPlayer.toLowerCase())) {
                return (<Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={process.env.PUBLIC_URL + "/" + tid.Id + ".jpg"}
                        title={tid.Id}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h4" component="h2">
                            {tid.PFName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Value: ${(parseFloat(tid.Value) * 10000000).toString()}
                        </Typography>
                        <Typography>
                            Skill: {tid.SkillDesc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography gutterBottom variant="h6" className={classes.detailText}> More Details </Typography> <IconButton
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
                </Card>)
            } else {
                return <> </>
            }
        })
    }


    return (
        <>
            <Paper className={classes.paper}>
                <Grid container spacing={4}>
                    {fetchSearchedPlayer}
                </Grid>
            </Paper>
        </>
    );
};

export default SearchData;