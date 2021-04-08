import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import Controls from './controls/Controls';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


const useStyles = makeStyles(theme => ({
    dialogWrapper:{
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    contentTitle:{
        textAlign:'center',
        marginBottom:theme.spacing(1),
    },
    contentSubTitle:{
        textAlign:'center',
        padding:theme.spacing(1),
    },
    dialogActions:{
        justifyContent:'center'
    },
    titleIcon:{
        backgroundColor: theme.palette.secondary.main,
        color:'#fff',
        '& :hover':{
            cursor:'default',
        },
        '& .MuiSvgIcon-root':{
            fontSize:'5rem'
        },
    },
    dialogTitle:{
        textAlign:'center'
    }

}))

export default function ConfirmDialog(props) {

    const {confirmDialog, setConfirmDialog} = props;
    const classes = useStyles();

    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton  className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography
                    variant="h6"
                    component="div"
                    className={classes.contentTitle}
                >
                    {confirmDialog.title}
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    className={classes.contentSubTitle}
                >
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Controls.Button 
                    text="No"
                    onClick={()=>{
                        setConfirmDialog({...confirmDialog, isOpen:false})
                    }}
                />
                <Controls.Button 
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
           
        </Dialog>
    )
}
