import React, {Component} from 'react';
import {} from '@material-ui/core'
import Navbar from './Navbar'
import Cards from './Cards'


class Dashboard extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
	render() {
    return(
      <div>
        <Navbar />
        <Cards />
        <Cards />
        <Cards />
      </div>
    )
  }

}





export default Dashboard;