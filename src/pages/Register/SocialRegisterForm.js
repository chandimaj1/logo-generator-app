import React from 'react';
import { Grid, Icon, makeStyles, Typography } from '@material-ui/core';
import {Button} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({
    socialRegisterHeading:{
        paddingBottom: theme.spacing(2)
      },

    facebookButton:{
        backgroundColor: '#38529a',
        color:'#fff',
        margin: theme.spacing(.5),
    },

    googleButton:{
        backgroundColor: '#b02d22',
        color:'#fff',
        margin: theme.spacing(.5),
    }
}));

export default function SocialRegisterForm() {

    const classes = useStyles();

    return (
            <Grid container>
                <Grid item xs={12}>
                <Typography variant="subtitle1" component="div" className={classes.socialRegisterHeading}>
                    Register with your favourite Social Account
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <div>
                    <Button variant="contained" color="secondary" size="large" className={classes.googleButton}>
                    <Icon className="fa fa-google" color="primary" /> SignUp with Google
                    </Button>
                    <Button variant="contained" color="secondary" size="large" className={classes.facebookButton}>
                        <FacebookIcon/> SignUp with Facebook
                    </Button>
                </div>
                </Grid>
            </Grid>
    )
}
