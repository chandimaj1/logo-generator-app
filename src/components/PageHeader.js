import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:'#f2f2f2',
    },
    pageHeader:{
        padding: theme.spacing(3),
        display:'flex',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(1),
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#0EE5A3',
        backgroundColor:'#283759',
    },
    pageTitle:{
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-h6':{
            fontWeight: 'bold',
            fontStyle: 'normal',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 'normal',
            fontStyle: 'normal',
        }
    }
}));

export default function PageHeader(props) {
    const classes = useStyles();
    const {title, subTitle, icon} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}  variant="outlined">
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography 
                        variant="h6"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant="subtitle2"
                        component="div"
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
