import React, {Component} from 'react';
import './CSS/Hero.css';

class Hero extends Component {
  render() {
    return(
      <div className="hero">
        <div className="hero-text">
        <h1>A revolutionary ride service</h1>
        <p>Introducing Waymo: the ride service without a driver.</p>
        <button><a href="https://waymo.com">Learn More</a></button>
        </div>
        <img src="https://venturebeat.com/wp-content/uploads/2019/09/waymo-ipace-e1572290208222.jpg?w=1200&strip=all" />
      </div>
    )
  }
}

export default Hero;