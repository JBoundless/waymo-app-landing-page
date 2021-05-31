import React, {Component} from 'react';
import './CSS/Features.css';

class Features extends Component {
  render() {
    return(
      <div className="features">
        <h2>App Features</h2>
        <h3>The Waymo app allows you to hail our driverless cars from anywhere! Just enter your current location, where you want to go, and press 'Request Ride'!</h3>
        <img src="https://www.theturnsignalblog.com/static/6ad2169cfd49caf37116c427c98639d5/275e0/app.png" style={{aligncontent: "center", justifycontent: "center", textalign: "center", margin: "auto"}}/>
        <img src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/Waymo_inline_02.png" />
      </div>
    )
  }
}

export default Features;