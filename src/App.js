import React, { Component } from 'react';
import PartList from './PartList/PartList'
import Cart from './Cart/Cart'
import Navbar from './Navbar'
import FEATURES from './STORE'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  checkItem = (feature, item) => {
    return (item.name === this.state.selected[feature].name);
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <main>
          <PartList 
            features={FEATURES}
            handleCheckItem = {(feature, item) => this.checkItem(feature, item)}
            handleSelectFeature = {(feature, item) => this.updateFeature(feature, item)}
            selected = {this.state.selected}
          />
          <Cart 
            selected = {this.state.selected} 
          />
        </main>
      </div>
    );
  }
}

export default App;
