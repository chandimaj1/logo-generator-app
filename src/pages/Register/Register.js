import React from 'react';
import RegisterForm from './RegisterForm';
import SocialRegisterForm from './SocialRegisterForm';
import PageHeader from '../../components/PageHeader';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

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

    signInBtn:{
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(2),
    }
}));

export default function Register() {

    const classes = useStyles();
    return (
        <>
        <PageHeader 
        title = "Create my Logomation Account"
        subTitle = "Create a Logomaton account to get started"
        icon = {<PersonAddIcon fontSize="large" />}
       />

        <Paper className={classes.noticeContent}>

          <Typography variant="subtitle1" component="div">
            Already on Logomation ?
            <Button variant="contained" color="primary" className={classes.signInBtn}>
              <ExitToAppIcon></ExitToAppIcon>
              Sign In
            </Button>
            here.
          </Typography>
          
          
        </Paper>  
        <Paper className={classes.pageContent}>
          <RegisterForm />
        </Paper> 

        <Paper className={classes.noticeContent}>
          <SocialRegisterForm />
        </Paper>  
          
        
      
        </>
    )
}
