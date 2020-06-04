import React, {Component} from 'react';
import {} from '@material-ui/core'
import Navbar from './Navbar'
import Cards from './Cards'


class Dashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
      online: true
    };
  }

  toggleOnline = () => {
    this.setState({
      online: !this.state.online
    });
  }



	render() {
    return(
      <div>
        <Navbar />
        <Cards toggleOnline={this.toggleOnline} />
        <Cards />
        <Cards />
      </div>
    )
  }

}





export default Dashboard;