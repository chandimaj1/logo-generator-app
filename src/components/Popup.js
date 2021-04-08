import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from '../components/controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme=>({
    dialogWrapper:{
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
}))
export default function Popup(props) {

    const classes = useStyles();
    const {title, children, openPopup, setOpenPopup} = props;

    return (
       <Dialog open={openPopup} maxWidth="md" classes={{paper:classes.dialogWrapper}}>
           <DialogTitle>
               <div style={{display:'flex'}}>
                   <Typography
                    style={{flexGrow:1}}
                    variant="h6"
                    component="div"
                   >
                        {title}
                   </Typography>
                   <Controls.ActionButton
                    color="primary"
                    onClick={()=>{setOpenPopup(false)}}
                   >
                       <CloseIcon />
                   </Controls.ActionButton>
                </div>
           </DialogTitle>
           <DialogContent>
               {children}
           </DialogContent>
       </Dialog>
    )
}
