import React from 'react'
import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root:{
        top: theme.spacing(9),
    }
}));

export default function Notification(props) {

    const {notify, setNotify}=props;
    const classes = useStyles();

    const handleClose = (event, reason)=>{
        if (reason === 'clickaway')
            return;

        setNotify({
            ...notify,
            isOpen:false
        })
    }

    return (
        <Snackbar
            open={notify.isOpen}
            autoHideDuration={5000}
            anchorOrigin={{vertical:'top', horizontal:'right'}}
            className={classes.root}
            onClose={handleClose}
        >
            <Alert severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
