import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Register from '../pages/Register/Register';
import ViewUsers from '../pages/Register/ViewUsers';
import Wizard from '../pages/LogoCreator/Wizard';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router,
         Switch, 
         Route, 
         //Link,
         //useRouteMatch,
          //useParams
      } from "react-router-dom";
import SignIn from '../pages/Register/SignIn';


const theme = createMuiTheme({
  palette:{
    primary:{
      light: '#333996',
      main: '#283759'
    },
    secondary:{
      light: '#f83245',
      main: '#0EE5A3'
    },
    background:{
      default:'#ffffff'
    }
  },
  shape:{
    borderRadius:'4px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple: false
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

const useStyles = makeStyles(theme => ({
  appMain : {
    paddingLeft:'320px',
    width:'100%',
    height:'100%',
    paddingBottom:theme.spacing(5)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path="/manage-users">
              <ViewUsers />
            </Route>
            <Route exact path="/create-account">
              <Register />
            </Route>
            <Route exact path="/logo-wizard">
              <Wizard />
            </Route>
          </Switch>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;