import { makeStyles } from '@material-ui/core';
import React from 'react'
import {Button} from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root:{
        minWidth:0,
        margin: theme.spacing(0.5)
    },
    secondary:{
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label':{
            color: theme.palette.secondary.main,
        }
    },
    primary:{
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label':{
            color: theme.palette.primary.main,
        }
    }
}))

export default function ActionButton(props) {
    const {color, children, onClick}=props;
    const classes = useStyles();
    return (
       <Button
        onClick={onClick}
        className={`${classes.root} ${classes[color]}`}
       >
           {children}
       </Button>
    )
}
