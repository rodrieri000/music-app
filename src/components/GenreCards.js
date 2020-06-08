import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import classicalIcon from '../classicalIcon.jfif';
import jazzIcon from '../jazzIcon.jpg';
import danceIcon from '../danceIcon.jfif';
import hiphopIcon from '../hiphopIcon.jpg';

const useStyles = makeStyles({
  genreIcons: {
    backgroundColor: "#1c1e1f", 
    height: "615px"
  },
  classicalIcon: {
    marginLeft: "700px",
    marginTop: "30px",
    height: "270px", 
    width: "270px", 
    borderRadius: "10px",
    backgroundColor: "black"
  },
  classicalImg: {
    height: "270px", 
    width: "270px"
  },
  jazzIcon: {
    marginLeft: "990px",
    marginTop: "-270px",
    height: "270px", 
    width: "270px", 
    borderRadius: "10px",
  },
  jazzImg: {
    height: "270px", 
    width: "270px" 
  },
  danceIcon: {
    marginLeft: "700px",
    marginTop: "20px",
    height: "270px", 
    width: "270px", 
    borderRadius: "10px",
  },
  danceImg: {
    height: "270px", 
    width: "270px" 
  },
  hiphopIcon: {
    marginLeft: "990px",
    marginTop: "-270px",
    height: "270px", 
    width: "270px", 
    borderRadius: "10px",
  },
  hiphopImg: {
    height: "270px", 
    width: "270px" 
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.genreIcons}>
      <CardActionArea className={classes.classicalIcon}>
        <CardMedia className={classes.classicalImg}
          component="img"
          alt="Classical Essentials"          
          img src={classicalIcon}
        />
      </CardActionArea>      
      <CardActionArea className={classes.jazzIcon}>
        <CardMedia className={classes.jazzImg}
          component="img"
          alt="Jazz Classics"
          img src={jazzIcon}
        />
      </CardActionArea>      
      <CardActionArea className={classes.danceIcon}>
        <CardMedia className={classes.danceImg}
          component="img"
          alt="Dance Party"
          img src={danceIcon}
        />
      </CardActionArea>      
      <CardActionArea className={classes.hiphopIcon}>
        <CardMedia className={classes.hiphopImg}
          component="img"
          alt="Lofi Hip-Hop"
          img src={hiphopIcon}
        />
      </CardActionArea>      
    </Card>
  );
}