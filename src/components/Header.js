import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor: '#f8f8f8'
    },
    searchInput:{
        opacity:'0.8',
        padding:`3px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',
        width:'200px',
        '&:hover':{
            backgroundColor:'#eee'
        },
        '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(1)
        }
    }
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item style={{border:'solid 1px #fff'}}>
                        <InputBase 
                            placeholder="Search Designs"
                            startAdornment={<SearchIcon/>}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
