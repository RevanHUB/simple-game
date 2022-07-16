import React from "react";
import '../styles/character.css';
import './movement.js'


export class Character extends React.Component{
  constructor(props) {
    super(props);
    this.state = {charColor: props.charColor}

  }


  render() {
    return <div className="character" id="player" style={{backgroundColor: this.state.charColor}}>
        {/* <span className="mouth"></span> */}
        {}
    </div>;
  }
}

export default Character;

