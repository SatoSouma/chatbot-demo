import React from 'react'
import { makeStyles,createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from "./index"

const useStyles = makeStyles(() => (
    createStyles({
        "chat":{
            height: 400,
            padding: "0px",
            overflow: "auto"
        }
    })
))

const Chats = (props) => {
    const classes = useStyles()
    console.log("表示" + props.chats.text)
    return(
        <List className={classes.chat}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </List>
    )
}

export default Chats