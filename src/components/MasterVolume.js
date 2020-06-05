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
    root: {
      minWidth: 275,
      padding: 12,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function MasterVolumeCard(props) {
    const classes = useStyles();
  

  return (
    <Box display="inline-block" justifyContent="center" padding="60px" height="150px" width="320px">

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
