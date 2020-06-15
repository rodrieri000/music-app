import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  box: {
    display: "flex", 
    flexDirection: "row", 
    position: "absolute",
    top: "100px", 
    right: "20px"
  },
  root: {
    height: "180px",
    width: "250px",
    backgroundColor: "#121212", 
    color: "white"
  },
  bullet: {
    display: 'row',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18, 
    color: "white"
  },
  pos: {
    marginBottom: 12,
    color: "white"
  },
});

export default function OnlineModeCard(props) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            Online Mode
          </Typography>        
          <Typography className={classes.pos} color="textSecondary">
            Is this application connected to the internet?         
          </Typography>
        </CardContent>
        <CardActions>      
          <Switch checked={props.online}
          onChange={props.toggleOnline}   
          />       
        </CardActions>
      </Card>
    </Box>
  );
}