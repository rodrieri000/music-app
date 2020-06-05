import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    title: {
      fontSize: 18
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function QualitySelect(props) {
  const classes = useStyles();
  

  return (
    <Box display="inline-block" justifyContent="center" padding="60px" height="150px" width="320px">
   
   <Card className={classes.root}>
   <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Sound Quality
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Manually control music quality in the event of poor connection
            </Typography>
        </CardContent>
        <CardActions>
      <FormControl fullWidth>
       
        <Select onChange={e => props.changeQuality(e.target.value)} value={props.quality} >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
        </Card>
      </Box>
  )
}