import React from 'react'
import Lottie from 'react-lottie';
import  animationData from './../animation/ufo.json'
// import lottie from './../animation/lottie'
 
export default class Loader extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div className='animation-container'>
      <Lottie options={defaultOptions}
             
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    </div>
  }
}