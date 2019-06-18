import React from "react";
import './../pages/Rewards.scss'

import rewardsSvg from "./../icone/rewards.svg";

class Ribbon extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div  className={this.props.classi} key={this.props.k}>
          <div className="rewards-animation">
            <img src={rewardsSvg} alt="rewards logo"  />
          </div>
          <p>{this.props.title}</p>
        </div>
      );
    }
  }

  export default Ribbon