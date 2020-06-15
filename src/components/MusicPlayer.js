import React from 'react';
import albumCover from '../albumCover.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: "#121212",
    height: "180px",
    width: "450px",
    marginTop: "20px",
    marginLeft: "260px", 
    color: "#34b0ba", 
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    color: "#34b0ba",
    border: "0"
  },
  content: {
    flex: '1 0 auto',
    color: "#34b0ba"
  },
  song: {
    fontSize: "25px",
    color: "#34b0ba",
  },
  artist: {
    color: "#34b0ba",
  },
  likeIcon: {
    position: "absolute",
    top: "-25px",
    left: "100px",
    color: "#34b0ba"
  },
  controls: {
    marginTop: "-30px",
    display: 'flex',
    alignItems: 'center',
    color: "#34b0ba"
  },
  shuffleIcon: {
    color: "#34b0ba"
  },
  prevIcon: {
    color: "#34b0ba"
  },
  playIcon: {
    height: 38,
    width: 38,
    color: "#34b0ba"
  },
  nextIcon: {
    color: "#34b0ba"
  },
  loopIcon: {
    color: "#34b0ba"
  },
  cover: {
    height: "180px",
    width: "180px"
  }
});

export default function MusicPlayer() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.song}>
            Smokestack Lightnin'
          </Typography>
          <Typography className={classes.artist}>
            Howlin' Wolf
          </Typography>
          <IconButton aria-label="Like">
            <FavoriteBorderIcon className={classes.likeIcon}/>
          </IconButton>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="shuffle">
            <ShuffleIcon className={classes.shuffleIcon}/>
          </IconButton>
          <IconButton aria-label="previous" color="#34b0ba">
            <SkipPreviousIcon className={classes.prevIcon} />
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon className={classes.nextIcon}/>
          </IconButton>
          <IconButton aria-label="loop">
            <LoopIcon className={classes.loopIcon}/>
          </IconButton>
        </div>
      </div>
      <CardMedia className={classes.cover}>
        <img className={classes.cover} src={albumCover} alt="Album Cover" />
      </CardMedia>
    </Card>
  );
}