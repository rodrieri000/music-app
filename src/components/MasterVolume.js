import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  box: {
    display: "flex", 
    flexDirection: "row", 
    position: "absolute",
    top: "290px", 
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

export default function MasterVolumeCard(props) {
    const classes = useStyles();
  

  return (
    <Box className={classes.box}>
    <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Master Volume
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
                Overrides all other sound settings in this application!
        </Typography>
        </CardContent>
        <CardActions>
      <Slider
        onChange={(e, value) => props.changeVolume(value)}
        defaultValue={20}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      </CardActions>

    </Card>
    </Box>
  );
}
