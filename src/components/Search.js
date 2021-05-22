import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Ex1 from './Ex1.js';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    searchBox: {
        width: '100%',
        paddingTop: '30px',
        paddingBottom: '30px',
        background: '#4285F4',
        borderRadius: '10px'
    },
    heading: {
        paddingLeft: '550px',
        color: '#e96161',
        fontFamily: 'fantasy',
        background: `url(${process.env.PUBLIC_URL + '/image.jpg'})`,
        WebkitTextEmphasis: 'circle',
        outlineStyle: 'dotted'
    },
}));

function Search() {
    const classes = useStyles();
    const [searchData, setSearchData] = useState('');
    const handleChange = (data) => {
        setSearchData(data);
    };

    return (
        <>
            <TextField className={classes.searchBox} type="text" placeholder="SEARCH FOR A PLAYER OR TEAM" value={searchData} onChange={(event) => { handleChange(event.target.value) }} ></TextField>
            {searchData && <Typography variant="h3" className={classes.heading}> Showing results for: {searchData} </Typography>}
            <Ex1 searchedPlayer={searchData} />
        </>
    );
};

export default Search;