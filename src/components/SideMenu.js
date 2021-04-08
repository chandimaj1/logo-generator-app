import { makeStyles, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { BrowserRouter as Link} from "react-router-dom";


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
    },
    listItem:{
        backgroundColor:'#fff',
        margin:theme.spacing(1),
        padding:theme.spacing(1),
        border:`solid 2px ${theme.palette.primary.main}`,
        width:'inherit',
        '&:hover':{
            backgroundColor:theme.palette.secondary.main,
        }
    },
    link:{
        textDecoration:'none',
        color:theme.palette.primary.main,
        textAlign:'center'
    }
}));

export default function SideMenu() {

    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            <div className={classes.logoArea}>
                <img src="../logomation_logo.png" alt="Logomation logo" className={classes.logo} />
                <Typography 
                    variant="subtitle2"
                    component="div"
                    className={classes.slogan}
                >
                    AI Logo Designer V1.0
                </Typography>
            </div>
            <div className={classes.linkArea}>
                <List>
                    <Link to="/" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                    </Link>

                    <Link to="/sign-in" className={classes.link}>
                        <ListItem button className={classes.listItem} >
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Sign In"}/>
                        </ListItem>
                    </Link>

                    <Link to="/create-account" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Create Account"}/>
                        </ListItem>
                    </Link>

                    <Link to="/admin/manage-users" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Manage Users"}/>
                        </ListItem>
                    </Link>

                    <Link to="/logo-designer" className={classes.link}>
                        <ListItem button className={classes.listItem}>
                            <ListItemIcon>
                                <CropFreeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Logo Designer"}/>
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    )
}
