import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import hiphopAlbum from '../hiphopAlbum.jpg';
import podcastImg from '../podcastImg.jpg';
import indieImg from '../indieImg.jpg';
import workoutImg from '../workoutImg.jpg';
import jazzImg from '../jazzImg.jpg';
import classicalImg from '../classicalImg.jpg';
import bluesImg from '../bluesImg.jpg';
import sleepImg from '../sleepImg.jpg';
import metalImg from '../metalImg.jpg';
import funkImg from '../funkImg.jpg';


const useStyles = makeStyles({
  genreIcons: {
    marginLeft: "265px",
    marginTop: "20px", 
    backgroundColor: "#1c1e1f",    
    width: "815px",
  },
  title: {
    cursor: "pointer",
    fontSize: "20px",
    color: "white", 
    marginLeft: "10px",     
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  moreIcon: {
    position: "absolute", 
    top: "303px"
  },
  browseBoxes: {
    marginTop: "20px",
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap",
    height: "330px",
    backgroundColor: "#1c1e1f"
  },
  hiphopBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#cb801d",
    borderRadius: "10px"
  },
  hiphopTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  hiphopImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  podcastBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#946fb4",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  podcastTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  podcastImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  indieBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#7fc4b8",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  indieTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  indieImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  workoutBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#cc502c",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  workoutTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  workoutImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  jazzBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#84655b",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  jazzTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  jazzImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  classicalBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#b8ca6f",
    borderRadius: "10px"
  },
  classicalTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  classicalImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  bluesBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#100061",
    borderRadius: "10px",    
    marginLeft: "15px"
  },
  bluesTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  bluesImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  sleepBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#799e8c",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  sleepTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  sleepImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  metalBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#2d303a",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  metalTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  metalImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  },
  funkBox: {
    height: "150px",
    width: "150px",
    backgroundColor: "#b21726",
    borderRadius: "10px", 
    marginLeft: "15px"
  },
  funkTitle: {
    fontSize: "25px",
    color: "white",
    padding: "10px",
    position: "absolute", 
    top: "0px", 
    left: "5px"
  },
  funkImg: {
    marginLeft: "50px",
    marginTop: "50px",
    height: "100px",
    width: "100px",
    borderRadius: "0 0 10px 0"
  }
  
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.genreIcons}>
      <Typography className={classes.title}>
        Browse all
        <NavigateNextIcon className={classes.moreIcon}/>
      </Typography>
      <Card className={classes.browseBoxes}>
        <CardActionArea className={classes.hiphopBox}>
          <CardMedia>
          <img className={classes.hiphopImg} src={hiphopAlbum} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.hiphopTitle}>
              Hip-Hop
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.podcastBox}>
        <CardMedia>
          <img className={classes.podcastImg} src={podcastImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.podcastTitle}>
              Podcasts
          </Typography>
        </CardActionArea>            
        <CardActionArea className={classes.indieBox}>          
          <CardMedia>
          <img className={classes.indieImg} src={indieImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.indieTitle}>
              Indie
          </Typography>
        </CardActionArea>   
        <CardActionArea className={classes.workoutBox}>
          <CardMedia>
          <img className={classes.workoutImg} src={workoutImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.workoutTitle}>
              Workout
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.jazzBox}>
          <CardMedia>
          <img className={classes.jazzImg} src={jazzImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.jazzTitle}>
              Jazz
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.classicalBox}>
        <CardMedia>
          <img className={classes.classicalImg} src={classicalImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.classicalTitle}>
              Classical
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.bluesBox}>
        <CardMedia>
          <img className={classes.bluesImg} src={bluesImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.bluesTitle}>
              Blues
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.sleepBox}>
        <CardMedia>
          <img className={classes.sleepImg} src={sleepImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.sleepTitle}>
              Sleep
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.metalBox}>
        <CardMedia>
          <img className={classes.metalImg} src={metalImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.metalTitle}>
              Metal
          </Typography>
        </CardActionArea>      
        <CardActionArea className={classes.funkBox}>
        <CardMedia>
          <img className={classes.funkImg} src={funkImg} alt="Album Cover" />
          </CardMedia>
          <Typography className={classes.funkTitle}>
              Funk
          </Typography>
        </CardActionArea>      
        
      </Card>
    </Card>
  );
}