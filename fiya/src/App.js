import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import House from './House';
import HouseList from './HouseList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firehouses: data,
      currentHouse: null
    }
  }

  selectFirehouse(house){
    // const house = this.state.firehouses.find(f => f.FacilityName === name);
    // might not actually need to do this
    this.setState({currentHouse: house});
  }

  render() {

    return (
      <div className="App">
        <nav>
          <h1>New York City Firehouses</h1>
        </nav>
        <div className="container">
          <House house={this.state.currentHouse} />
          <HouseList houses={this.state.firehouses} selectFirehouse={this.selectFirehouse.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
