import React, {Component} from 'react';
import {} from '@material-ui/core'
import Navbar from './Navbar'
import OnlineModeCard from './OnlineModeCard'
import MasterVolumeCard from './MasterVolume'
import QualitySelect from './SoundQuality'


class Dashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
      online: false,
      volume: 20,
      quality: 2,
      notifications: []
    };
  }

  toggleOnline = () => {
  
    this.setState({
      online: !this.state.online
    });

  }

  changeVolume = (x) => {
    this.setState({
      volume: x
    });
  }

  changeQuality = (x) => {
    this.setState({
      quality: x
    });
  }



	render() {
    return(
      <div>
        <Navbar />
        <OnlineModeCard toggleOnline={this.toggleOnline} />
        <MasterVolumeCard changeVolume={this.changeVolume} />
        <QualitySelect changeQuality={this.changeQuality} quality={this.state.quality} />
        <h2>System Notifications:
        </h2>
        <div>{this.state.online ? '' : <p>Your application is offline. You wont be able to share or stream music to other devices</p>}</div>
        <div>{this.state.volume  >80 ? <p>Listening to music at a high volume could cause long-term hearing loss</p> : '' }</div>
        <div>{this.state.quality === 1 ? <p>Music quality is degraded. Increase quality if your connection allows it</p> : '' }</div>
      </div>
    )
  }

}





export default Dashboard;