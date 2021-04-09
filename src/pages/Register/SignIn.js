import React from 'react';
import SignInForm from './SignInForm';
import PageHeader from '../../components/PageHeader';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme =>({
    pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      boxShadow:'1px 1px 3px #ccc',
      border:'solid 1px #0EE5A3',
    },

    noticeContent:{
      margin:theme.spacing(5),
      marginTop: theme.spacing(.5),
      marginBottom: theme.spacing(0),
      padding: theme.spacing(2),
      backgroundColor:'#fdfdfd',
      boxShadow:'1px 1px 3px #ccc',
      border:'solid 1px #0EE5A3',
    },

    createAccountBtn:{
      marginLeft:theme.spacing(5),
      marginRight:theme.spacing(2),
    },

}));

export default function Register() {

    const classes = useStyles();
    return (
        <>
        <PageHeader 
        title = "Let's Get Started"
        subTitle = "Sign in to Logomaton account to get started"
        icon = {<ExitToAppIcon fontSize="large" />}
       />

        
        <Paper className={classes.pageContent}>
            <Grid container>
                <Grid item xs={12} md={7}>
                        <SignInForm />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="subtitle1" component="div" style={{padding:'10px', textAlign:'center'}}>
                        Don't have a Logomation account yet ?
                    </Typography>
                    <Link to="/create-account" className={classes.link}>
                        <Button variant="contained" color="primary" className={classes.createAccountBtn}>
                        <PersonAddIcon />
                            Create Acccount
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <hr />
                    <Typography variant="subtitle1" component="div">
                        Can't remember your password ?
                        <Button variant="contained" color="secondary" className={classes.createAccountBtn}>
                            Recover password
                        </Button>
                    </Typography>
                    
                </Grid>
            </Grid>
        </Paper> 
        </>
    )
}
