import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import Konami from 'react-konami';
import shuffle from 'lodash/shuffle';
import QuickInfo from './QuickInfo/QuickInfo';
import Details from './Details/Details';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#6C3771'
  }
});

const facts = ['Colin toured with the band Seven Handle Circus.','Colin has several fingers and toes.','Colin lives in B\'Ham with his wife, Dr. Stephanie Hansard.','Colin\'s parents were zoo-keepers.','Colin once won a prize in a drawing at a Little Caesar\'s.','Colin is alright at Tony Hawk Pro Skater 2.','Colin is allergic to corn, but only a little.']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      egg: false,
      fact: shuffle(facts)[0]
    }
  }

  onEggOpen = () => {
    this.setState({
      egg: true,
      fact: shuffle(facts)[0]
    })
  }

  onEggClose = () => {
    this.setState({
      egg: false
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar iconElementLeft={<div />} title="Colin Vinson" />
          <div className="Main">
            <QuickInfo />
            <Details />
          </div>
          <Konami easterEgg={this.onEggOpen} />
          <Snackbar
            open={this.state.egg}
            autoHideDuration={3000}
            message={this.state.fact}
            onRequestClose={this.onEggClose} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
