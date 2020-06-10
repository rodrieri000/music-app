import React, { Component } from "react";
import {} from "@material-ui/core";
import Navbar from "./Navbar";
import OnlineModeCard from "./OnlineModeCard";
import MasterVolumeCard from "./MasterVolume";
import QualitySelect from "./SoundQuality";

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
      <div>
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
        <h2>System Notifications:</h2>
        {this.state.notifications.map((notifications, index) => (
          <div key={index}>{notifications}</div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
