import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import QuickInfo from './QuickInfo/QuickInfo';
import Details from './Details/Details';
import Loader from './Loader/Loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar iconElementLeft={<div />} title="Colin Vinson" />
          <div className="Main">
            <QuickInfo />
            <Details />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
