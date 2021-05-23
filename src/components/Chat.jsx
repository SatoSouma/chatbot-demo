import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import hidaka from '../assets/img/hidaka.jpg'
import kitazima from '../assets/img/kitazima.jpg'

const Chat = (props) => {

    const isQuestion = (props.type === 'question');

    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt='icon' src={hidaka} />
                ) : (
                    <Avatar alt='icon' src={kitazima} /> 
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat