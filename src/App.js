
import './App.css';
import React, { useState } from 'react';
import Controls from './components/controls';
import  Character  from './components/character';
import  Enemy  from './components/enemy';
import Map from './components/map'
import UI from './components/ui'



class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {charColor: "blueviolet"};
  }
  changeColor = () => {
    this.setState({charColor: "gray"});
  }
  
  render() {
  
  return (
    <div className="App">
      <div id="game" className="App-header">
        {/* <Map/> */}
        <Controls
          charColor={this.state.charColor}
          setCharColor={this.changeColor}
          />

        <Character 
          charColor={this.state.charColor}
          changeColor={this.changeColor}
        />
        <Enemy/>
        
        {/* {this.changeColor()} */}
        <UI/>
      </div>
    </div>
  );
}
}

export default App;
