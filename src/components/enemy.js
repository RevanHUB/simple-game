import React from "react";
import '../styles/enemy.css';
import './behavior.js'


export class Enemy extends React.Component{
  constructor(props) {
    super(props);
  }

  
  render() {
    return <div className="enemy" id="enemy">
    </div>;
  }
}

export default Enemy;

