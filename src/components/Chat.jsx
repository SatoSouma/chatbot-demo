import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import neko from '../assets/img/neko.jpg'
import inu from '../assets/img/inu.jpg'
import { createStyles, makeStyles } from '@material-ui/core';


const Chat = (props) => {

    const isQuestion = (props.type === 'question');

    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt='icon' src={neko} />
                ) : (
                    <Avatar alt='icon' src={inu} /> 
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat