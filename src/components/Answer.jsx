import React from "react"
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//material-uiを操作
const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            borderColor:"#00ff00",
            color:"#00fa9a",
            fontWeight: 600,
            marginBottom: "8px",
            "&:hover": {
                backgroundColor: "#90ee90",
                color: "#ffffff"
            }
        }
    })
));

const Answer = (props) => {

    const classes = useStyles();

    return(
        <Button 
            className={classes.button}
            variant="outlined" onClick={() => props.select(props.content,props.nextId)} 
        >
            {props.content}
        </Button>
    )
}

export default Answer