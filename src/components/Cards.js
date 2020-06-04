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
  root: {
    minWidth: 275,
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

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Box display="inline-block" justifyContent="center" padding="60px" height="150px" width="320px">

    <Card className={classes.root}>
      <CardContent flexDirection="row">
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Online Mode
        </Typography>
        <Typography variant="h5" component="h2">

        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Is this application connected to the internet?
         
        </Typography>
        <Typography variant="body2" component="p">
        
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Switch onChange={props.toggleOnline} />
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </Box>
  );
}