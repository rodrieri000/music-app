import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    display: "flex", 
    flexDirection: "row",
  },
  box: {
    position: "absolute",
    top: "100px", 
    left: "20px"
  },
  card: {    
    backgroundColor: "#121212",
    height: "580px",
    width: "225px",
  }, 
  tabs: {
    color: "white",
  }, 
  home: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "17px",
    left: "45px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  searchIcon: {
    position: "absolute",
    top: "50px",
    left: "19px",
  },
  search: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "50px",
    left: "45px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  libraryIcon: {
    position: "absolute",
    top: "85px",
    left: "20px",
  },
  library: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "85px",
    left: "45px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  linebreak: {
    marginTop: "80px",
  },
  playlistIcon: {
    fontSize: "22px",
    position: "absolute",
    top: "145px",
    left: "20px",
  },
  playlist: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "145px",
    left: "47px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  createListIcon: {
    position: "absolute",
    top: "180px",
    left: "20px",
  },
  createList: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "180px",
    left: "47px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  likedSongsIcon: {
    position: "absolute",
    top: "220px",
    left: "19px",
  },
  likedSongs: {
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    top: "220px",
    left: "47px",
    textTransform: "none",
    '&:hover': {
      color: '#34b0ba',
      boxShadow: 'none',
    },
  },
  linebreak2: {
    marginTop: "135px",
  },
  notificationIcon: {
    position: "absolute",
    top: "280px",
    left: "20px",
  }
});

export default function HomeTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>   
        <Card className={classes.card}>
          <CardContent className={classes.tabs}>
            <HomeIcon/>
            <Typography className={classes.home}>
              Home           
            </Typography>              
            <SearchIcon className={classes.searchIcon}/>
            <Typography className={classes.search}>
            Search           
            </Typography>              
            <PlaylistPlayIcon className={classes.libraryIcon}/>
            <Typography className={classes.library}>
            Your Library           
            </Typography>  
            <hr className={classes.linebreak}></hr>            
            <LibraryMusicIcon className={classes.playlistIcon}/>
            <Typography className={classes.playlist}>
            Playlists        
            </Typography>
            <PlaylistAddIcon className={classes.createListIcon}/>
            <Typography className={classes.createList}>
            Create Playlist       
            </Typography>
            <FavoriteIcon className={classes.likedSongsIcon}/>
            <Typography className={classes.likedSongs}>
            Liked Songs      
            </Typography>
            <hr className={classes.linebreak2}></hr>
            <NotificationsActiveIcon className={classes.notificationIcon}/>
          </CardContent>
        </Card>
      </Box>      
    </div>
  );
}
