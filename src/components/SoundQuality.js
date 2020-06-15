import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  box: {
    display: "flex", 
    flexDirection: "row", 
    position: "absolute",
    top: "480px", 
    right: "20px"
  },
  root: {
    height: "200px",
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
    marginBottom: 20,
    color: "white"
  },
  form: {
    color: "white",
  },
  select: {
    color: "white", 
  }
});

export default function QualitySelect(props) {
  const classes = useStyles();
  

  return (
    <Box className={classes.box}>
   
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
      <FormControl className={classes.form} fullWidth>       
        <Select className={classes.select} onChange={e => props.changeQuality(e.target.value)} value={props.quality} >
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