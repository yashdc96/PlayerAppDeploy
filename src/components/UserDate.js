import React from 'react';
import { Typography } from '@material-ui/core';

function UserDate(props) {
    const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const utcDate = new Date(props.dateString);
    const localDate = new Date(utcDate.getTime() - userOffset);
    var dd = String(localDate.getDate()).padStart(2, '0');
    var mm = String(localDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = localDate.getFullYear();
    var hh = localDate.getHours();
    var minutes = localDate.getMinutes();
    var ss = localDate.getSeconds() < 10 ? localDate.getSeconds() + '0' : '';
    var ampm = hh >= 12 ? 'PM' : 'AM'
    const userDate = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + minutes + ':' + ss + ' ' + ampm + ' ST';

    return (
        <>
            <Typography> {userDate} </Typography>
        </>
    );
}


export default UserDate;