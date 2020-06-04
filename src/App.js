import React, {Component} from 'react';
import './App.css';
import {Button, TextField} from '@material-ui/core'
import Dashboard from './components/Dashboard'
import NavBar from './components/Navbar'

// function() {
//     return (
//       <NavBar/>
//     )  
// }

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
          <NavBar/>
          <form onSubmit={this.handleSubmit}>
            <TextField>
              Username
            </TextField>
            <br/>
            <TextField>
              Password
            </TextField>
            <br/>
          </form>
          <Button onClick={this.handleChange}>
            Login
          </Button>

        </div>
        
      )
    }
  }

  
  
   
    
  }


export default App;
