import React, {Component} from 'react';
import './App.css';
import {Button, TextField} from '@material-ui/core'
import Dashboard from './components/Dashboard'
import NavBar from './components/Navbar';
import Header from './components/Header';
import GenreCard from './components/GenreCards';


class App extends Component {  
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn: true
    })
  } 

  handleChange = (event) =>{
    this.setState({
      isLoggedIn: true
    });
  } 

  render() {
    
    if (this.state.isLoggedIn) {
      return <Dashboard />
    } else {
      return (
          // the code for your login screen          
          <div className="App">
          <NavBar />
          <Header />
          <div className="Sign-In">
            <form onSubmit={this.handleSubmit}>
              <TextField  placeholder="Email">
                Username
              </TextField>
              <br/>
              <TextField placeholder="Password">
                Password
              </TextField>
              <br/>
            </form>
            <Button onClick={this.handleChange} size="large">
              Login
            </Button>
          </div>
          <GenreCard />
        </div>        
      )
    }
  }
}




export default App;
