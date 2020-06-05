import React, {Component} from 'react';
import {} from '@material-ui/core'
import Navbar from './Navbar'
import OnlineModeCard from './OnlineModeCard'
import MasterVolumeCard from './MasterVolume'


class Dashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
      online: true,
      volume: 20
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



	render() {
    return(
      <div>
        <Navbar />
        <OnlineModeCard toggleOnline={this.toggleOnline} />
        <MasterVolumeCard changeVolume={this.changeVolume} />

      </div>
    )
  }

}





export default Dashboard;