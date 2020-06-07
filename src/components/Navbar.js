import React from 'react';
import musicLogo from '../musicLogo.png';
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: { 
    backgroundColor: "#121212", 
    height: "80px"
  },
  menuButton: {
    marginRight: theme.spacing(0-.5),
    marginLeft: theme.spacing(10)
  },
  title: {
    flexGrow: 1,
  },
  sideButton: {
    fontSize: "18px",
    paddingRight: theme.spacing(3),
    textTransform: "none", 
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  }, 
  signUpButton: {
    fontSize: "18px",
    marginRight: theme.spacing(10), 
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();

    return(
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton edge='end' className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={musicLogo} alt="logo" />
            </IconButton>
            <Typography variant="h5" className={classes.title} align='left'>
              Music App
            </Typography>
            <Button size="large" className={classes.sideButton} color="inherit">Premium</Button>
            <Button size="large" className={classes.sideButton} color="inherit">Help</Button>
            <Button size="large" className={classes.signUpButton} color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  

}





// export default Navbar;