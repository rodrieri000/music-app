import React, { Component } from "react";
// import Typography from '@material-ui/core/Typography';
import Navbar from "./Navbar";
import OnlineModeCard from "./OnlineModeCard";
import MasterVolumeCard from "./MasterVolume";
import QualitySelect from "./SoundQuality";
import HomeTab from "./HomeTab";
import '../App.css';
import MusicPlayer from "./MusicPlayer";
import Browse from "./Browse"

const offlineNotification =
  "Your application is offline. You wont be able to share or stream music to other devices";
const volumeNotification = 
  "Listening to music at a high volume could cause long-term hearing loss"
const qualityNotification = 
  "Music quality is degraded. Increase quality if your connection allows it"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
      volume: 20,
      quality: 2,
      notifications: [],
    };
  }

  toggleOnline = (event) => {
    let newOnlineState = !this.state.online;
    this.setState({
      online: newOnlineState,
    });
    if (newOnlineState) {
      this.setState({
        notifications: this.state.notifications.filter(
          (notification) => notification !== offlineNotification
        ),
      });
    } else {
      this.setState({
        notifications: [...this.state.notifications, offlineNotification],
      });
    }
  };

  changeVolume = (x) => {
    this.setState({
      volume: x,
    });
    // If volume is too loud, add the notification
    if (x > 80) {
      // But only if it isn't already added in our notifications (avoid duplicates)
      if (!this.state.notifications.includes(volumeNotification)) {
        this.setState({
          notifications: [...this.state.notifications, volumeNotification]
        });
      }
    } else {
      // Otherwise, if its not too loud, remove the notification
      this.setState({
        notifications: this.state.notifications.filter(
          notification => notification !== volumeNotification)
      });
    }
  };

  changeQuality = (x) => {
    this.setState({
      quality: x,
    });
    if (x > 1) {
      this.setState({
        notifications: this.state.notifications.filter(
          (notification) => notification !== qualityNotification
        ),  
      });
    } else {
      this.setState({
        notifications: [...this.state.notifications, qualityNotification],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <OnlineModeCard
          toggleOnline={this.toggleOnline}
          online={this.state.online}
        />
        <MasterVolumeCard changeVolume={this.changeVolume} />
        <QualitySelect
          changeQuality={this.changeQuality}
          quality={this.state.quality}
        />
        <HomeTab/>
        <div className="Notifications">
          <div className="NotificationsTitle">
              Notifications
          </div>
            {this.state.notifications.map((notifications, index) => (
              <div className="updates" key={index}>{notifications}</div>
              ))}
        </div>
        <MusicPlayer/>
        <Browse />
      </div>
    );
  }
}

export default Dashboard;
