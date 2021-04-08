import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    sideMenu:{
        display:'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#283759'
    },
    logoArea:{
        position:'relative',
        height:'120px',
        width:'100%',
        background: 'linear-gradient(169deg, rgba(255,255,255,1) 75%, rgba(40,55,89,1) 10%)',
    },
    logo:{
        position:'relative',
        width:'80%',
        margin:theme.spacing(2),
        marginBottom: '0px',
    },
    slogan:{
        margin: theme.spacing(2),
        marginTop: '0px',
    }
}));

export default function SideMenu() {

    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            <div className={classes.logoArea}>
                <img src="logomation_logo.png" alt="Logomation logo" className={classes.logo} />
                <Typography 
                    variant="subtitle2"
                    component="div"
                    className={classes.slogan}
                >
                    AI Logo Designer V1.0
                </Typography>
            </div>
        </div>
    )
}
