import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: '#34b0ba', 
    fontSize: "70px",
    letterSpacing: "-1.5px", 
    position: "absolute",
    marginLeft: "125px", 
    marginTop: "70px",
    textShadow: "1.5px 1.5px #326b70",
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

    return(
      <div>
        <Typography className={classes.header}>
          Listen anytime, 
          <br/>
          anywhere.
        </Typography>
      </div>
    )
  

}





// export default Navbar;