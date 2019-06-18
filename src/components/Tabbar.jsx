import React from "react";
import "./Tabbar.scss";
import Eventi from "./../pages/Eventi";
import Rooms from "./../pages/Rooms";
import Home from "./../pages/Home";
import Materials from "./../pages/Materials";
import Rewards from "./../pages/Rewards";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 
class Tabbar extends React.Component {
  constructor() {
    super();
    this.state = {
      // onRefresh: true,
      active: "3",
      page: "/",
      notifiche: {
        rooms: 0,
        materials: 0,
        rewards: 3,
        eventi: 2,
        index: 0
      }
    };
    // this.animateTabbar = this.animateTabbar.bind(this);
  }

  componentDidMount() {
    let selector = document.getElementById("selector");

    let activeItem = document.getElementsByName("focus")[0];

    if (document.getElementsByName("focus")[0] === undefined) {
      // this.setState({
      //   ...this.state,
      //   onRefresh: false
      // })
      if (localStorage.getItem('paginaCorrente') === null)
        alert('no data');
      
      let local = localStorage.getItem('paginaCorrente');

      let item = document.querySelectorAll('[data-label="'+local+'"]')[0];
      item.setAttribute("name", "focus");
      console.log(item);
      console.log(local)

      activeItem = item;
    }

    console.log(activeItem)

    selector.style.width = activeItem.clientHeight + "px";
    selector.style.height = activeItem.clientHeight + "px";
    selector.style.left =
    activeItem.offsetLeft + (activeItem.clientHeight / 100) * 10 + "px";
    // console.log(activeItem);

    // notifiche
    if (this.state.notifiche.rooms !== 0) {
      let span = document.getElementById("span-rooms");
      span.append(this.state.notifiche.rooms);
    } else {
      let span = document.getElementById("span-rooms");
      span.style.display = "none";
    }
    if (this.state.notifiche.materials !== 0) {
      let span = document.getElementById("span-materials");
      span.append(this.state.notifiche.materials);
    } else {
      let span = document.getElementById("span-materials");
      span.style.display = "none";
    }
    if (this.state.notifiche.rewards !== 0) {
      let span = document.getElementById("span-rewards");
      span.append(this.state.notifiche.rewards);
    } else {
      let span = document.getElementById("span-rewards");
      span.style.display = "none";
    }
    if (this.state.notifiche.eventi !== 0) {
      let span = document.getElementById("span-eventi");
      span.append(this.state.notifiche.eventi);
    } else {
      let span = document.getElementById("span-eventi");
      span.style.display = "none";
    }
    if (this.state.notifiche.index > 0) {
      let span = document.getElementById("span-index");
      span.append(this.state.notifiche.index);
    } else {
      let span = document.getElementById("span-index");
      span.style.display = "none";
    }

    // this.setState({
    //   ...this.state,
    //   onRefresh: true
    // })

  }

  animateTabbar(e) {
    // e.preventDefault();

    var list = e.target.parentElement.parentNode.children;
    for (var i = 0; i < list.length; i++) {
      list[i].removeAttribute("name", "focus");
    }

    let el = e.target;

    setTimeout(function() {
      el.parentElement.setAttribute("name", "focus");
    }, 300);

    let selector = document.getElementById("selector");

    selector.style.width = e.target.parentNode.clientHeight + "px";
    selector.style.height = e.target.parentNode.clientHeight + "px";
    selector.style.left =
      el.parentElement.offsetLeft +
      (e.target.parentNode.clientHeight / 100) * 10 +
      "px";

    selector.classList.add("thinmoment");
    setTimeout(function() {
      selector.classList.remove("thinmoment");
    }, 600);

    // let reset = e.target.parentNode.dataset.label;
    e.target.parentNode.firstChild.style.display = "none";
    this.setState({
      notifiche: {
        ...this.state.notifiche,
        [e.target.parentNode.dataset.label]: 0
      }
    });
    // console.log(this.state);
    localStorage.setItem('paginaCorrente', e.target.parentNode.dataset.label);
// console.log(e.target.parentNode.dataset.label)
  }

  render() {
    return (
      <>
        <Router>
          <section className="home">
            <nav id="tabbar" className="tabs tabbar">
              <div id="selector" />
              <Link
                to="/rewards"
                onClick={this.animateTabbar.bind(this)}
                href="home"
                data-label="rewards"
              >
                <span id="span-rewards" />

                <svg
                  
                  id="1"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="10 0 50 60"
                  width="35px"
                  height="35px"
                >
                <path d="M38.67,7c.75.62,1.5,1.22,2.22,1.86a2,2,0,0,0,1.53.54c.67,0,1.35,0,2-.07a1.55,1.55,0,0,1,1.59.91c.32.61.66,1.21,1,1.83a1.86,1.86,0,0,0,1.2,1c.65.2,1.28.43,1.92.63a1.61,1.61,0,0,1,1.24,1.48c.08.69.2,1.37.28,2a1.82,1.82,0,0,0,.75,1.27c.53.4,1,.83,1.59,1.23a1.66,1.66,0,0,1,.69,1.86c-.13.62-.26,1.24-.4,1.86a2,2,0,0,0,.29,1.7c.37.54.69,1.11,1,1.66a1.59,1.59,0,0,1,0,1.89,16.7,16.7,0,0,0-1.14,1.85,2.42,2.42,0,0,0-.23,1.27,18.64,18.64,0,0,0,.41,2.08,1.68,1.68,0,0,1-.7,1.91c-.48.33-.9.73-1.38,1.06a2.16,2.16,0,0,0-1,1.72c0,.6-.16,1.19-.24,1.78a1.58,1.58,0,0,1-1.15,1.43,17.05,17.05,0,0,0-2.12.72,2.47,2.47,0,0,0-1,.82,20.89,20.89,0,0,0-1.08,2,1.54,1.54,0,0,1-1.54.9l-2.07-.09a1.89,1.89,0,0,0-1.48.53l-1.53,1.39a1.6,1.6,0,0,1-1.82.32c-.64-.26-1.28-.5-1.92-.78a1.81,1.81,0,0,0-1.56,0c-.65.28-1.32.53-2,.79a1.54,1.54,0,0,1-1.71-.3c-.54-.47-1.06-1-1.58-1.43a1.86,1.86,0,0,0-1.48-.53c-.61,0-1.23,0-1.85.09a1.74,1.74,0,0,1-1.88-1.09c-.26-.58-.6-1.12-.88-1.69a1.86,1.86,0,0,0-1.16-1l-2-.65a1.6,1.6,0,0,1-1.16-1.43c-.08-.69-.2-1.37-.28-2.05A1.82,1.82,0,0,0,17.32,37c-.54-.41-1-.85-1.59-1.24A1.63,1.63,0,0,1,15.05,34c.12-.62.25-1.24.4-1.86a2,2,0,0,0-.29-1.76c-.36-.52-.67-1.08-1-1.6a1.64,1.64,0,0,1,0-2c.36-.53.66-1.09,1-1.61a2,2,0,0,0,.29-1.71c-.15-.61-.27-1.23-.41-1.85a1.67,1.67,0,0,1,.7-1.86c.53-.38,1-.8,1.56-1.19a1.9,1.9,0,0,0,.82-1.4c.07-.65.18-1.3.26-1.95a1.62,1.62,0,0,1,1.23-1.49c.59-.17,1.16-.4,1.76-.56a2.11,2.11,0,0,0,1.44-1.21c.24-.53.57-1,.81-1.54a1.73,1.73,0,0,1,1.89-1.07c.61.05,1.23,0,1.85.07a2,2,0,0,0,1.48-.53c.72-.64,1.47-1.25,2.2-1.87h.79c.83.35,1.66.73,2.51,1a1.65,1.65,0,0,0,1,0c.85-.3,1.67-.68,2.51-1ZM34.89,43.79a16,16,0,1,0-16-16A16,16,0,0,0,34.89,43.79Z" /><path d="M48.52,44.17c0,.18,0,.35,0,.53V62.51a2.94,2.94,0,0,1,0,.67,1.5,1.5,0,0,1-2.24,1c-1.51-.73-3-1.5-4.51-2.26-2-1-3.93-2-5.89-3a2,2,0,0,0-2,0c-3.31,1.69-6.63,3.34-9.95,5a5.3,5.3,0,0,1-.77.34,1.49,1.49,0,0,1-2-1.21,5,5,0,0,1,0-.67V44a5.1,5.1,0,0,1,.32.44c.3.55.57,1.1.87,1.64a3.1,3.1,0,0,0,2.88,1.7.81.81,0,0,0,.22,0,3.69,3.69,0,0,1,3.83,1.39,2.72,2.72,0,0,0,3.44.63,4.13,4.13,0,0,1,4.24,0,2.71,2.71,0,0,0,3.43-.62,4,4,0,0,1,3.89-1.43,2.9,2.9,0,0,0,3.13-1.8c.3-.6.62-1.18.93-1.77Z" /><path d="M34.84,42A14.19,14.19,0,1,1,49.06,27.73,14.23,14.23,0,0,1,34.84,42Zm-6.33-7.44A1.54,1.54,0,0,0,30.82,36c1.13-.6,2.26-1.22,3.36-1.9a1.16,1.16,0,0,1,1.41,0c1,.63,2.08,1.18,3.11,1.78a1.57,1.57,0,0,0,2.43-1.78c-.3-1.27-.55-2.55-.84-3.82a.76.76,0,0,1,.25-.84c1-.89,2-1.82,3.05-2.72a1.59,1.59,0,0,0,.55-1.76,1.53,1.53,0,0,0-1.43-1.07c-1.34-.15-2.67-.34-4-.48a.66.66,0,0,1-.62-.44c-.57-1.26-1.18-2.5-1.75-3.76a1.56,1.56,0,0,0-2.95,0c-.57,1.25-1.15,2.51-1.76,3.74a.91.91,0,0,1-.61.44c-1.33.19-2.66.35-4,.5a1.54,1.54,0,0,0-1.44,1.06,1.57,1.57,0,0,0,.55,1.76c.74.65,1.47,1.32,2.2,2,1.21,1.08,1.21,1.07.86,2.66C28.94,32.44,28.71,33.55,28.51,34.52Z" />
                </svg>
              </Link>
              <Link
                to="/materials"
                onClick={this.animateTabbar.bind(this)}
                data-label="materials"
                href="home"
              >
                <span id="span-materials" />
                <svg
                  id="3"
                  x="0px"
                  y="0px"
                  viewBox="10 0 50 60"
                  width="35px"
                  height="35px"
                >
                  <g>
                  <path d="M35.78,10.84c.42.15.87.27,1.27.45a4.24,4.24,0,0,1,2.19,2.24.49.49,0,0,0,.52.34c.93,0,1.86,0,2.79,0a1.52,1.52,0,0,1,1.62,1.62q0,2.93,0,5.85a1.5,1.5,0,0,1-1.6,1.59H27.66a1.5,1.5,0,0,1-1.6-1.59c0-2,0-3.93,0-5.9a1.49,1.49,0,0,1,1.58-1.56c1,0,1.92,0,2.88,0a.52.52,0,0,0,.4-.2,4.56,4.56,0,0,1,3.46-2.75s0,0,.08-.06Z"/><path d="M23,16.88V21.2a4.53,4.53,0,0,0,4.75,4.74H42.46a4.53,4.53,0,0,0,4.73-4.76c0-1.41,0-2.82,0-4.34A34.13,34.13,0,0,1,51,17a2.81,2.81,0,0,1,2.22,2.66V20q0,18,0,36a3,3,0,0,1-2.52,3.1,4.17,4.17,0,0,1-.71,0H20.23A3,3,0,0,1,17,55.91V20.11a3,3,0,0,1,3.21-3.23Zm4.5,17.5-1.79-1.82a1.52,1.52,0,1,0-2.15,2.12l2.8,2.8a1.52,1.52,0,0,0,2.33,0l5.84-5.83a1.52,1.52,0,1,0-2.14-2.13L28,34Zm0,12.1c-.67-.69-1.3-1.35-1.95-2a1.49,1.49,0,0,0-2.12,0,1.47,1.47,0,0,0,0,2.12c1,1,2,2,3,3a1.44,1.44,0,0,0,2.08,0q3.07-3,6.11-6.1a1.4,1.4,0,0,0,.37-1.39,1.51,1.51,0,0,0-2.58-.66c-1.28,1.27-2.56,2.56-3.83,3.84C28.3,45.72,28,46.08,27.56,46.48ZM42.63,35h3a1.51,1.51,0,1,0,0-3H39.75a1.51,1.51,0,1,0,0,3Zm0,9.06H39.78a1.51,1.51,0,0,0-1.64,1.5,1.53,1.53,0,0,0,1.63,1.52h5.8a1.51,1.51,0,1,0,0-3C44.61,44.05,43.63,44.06,42.66,44.06Z"/>
                  </g>
                </svg>
              </Link>
              <Link
                name={localStorage.getItem('paginaCorrente') !== null ? '' : 'focus'}
                to="/"
                onClick={this.animateTabbar.bind(this)}
                data-label="index"
              >
                <span id="span-index" />
                <svg
                  id="2"
                  x="0px"
                  y="0px"
                  viewBox="10 0 40 60"
                  width="35px"
                  height="35px"
                >
                <path d="M64.85,35.78c-.8,1-1.59,1.95-2.41,2.92a1.26,1.26,0,0,1-2,.17L37.05,19.38l-2.11-1.76-.67.55L9.6,38.74c-1,.8-1.51.75-2.31-.21L5.45,36.34a1.25,1.25,0,0,1,.19-2.05l25.45-21.2.85-.71a4.51,4.51,0,0,1,5.94,0c2.79,2.31,5.56,4.64,8.34,7,.16.14.33.26.57.46,0-.3,0-.48,0-.67V12.85c0-1.1.38-1.48,1.47-1.48h6.55c1.08,0,1.47.4,1.48,1.49q0,7.16,0,14.31a1,1,0,0,0,.41.89q3.63,3,7.24,6a12.45,12.45,0,0,1,.89.89Z" transform='scale(0.9)'  /><path d="M39.69,58.9V44.7H30.17V58.9H16.34a2.47,2.47,0,0,1-2.79-2.75c0-5.67,0-11.34,0-17a1.17,1.17,0,0,1,.49-1q10.2-8.38,20.38-16.79c.16-.14.33-.26.54-.43l3.88,3.2q8.49,7,17,14a1.18,1.18,0,0,1,.51,1c0,5.71,0,11.42,0,17.12a2.44,2.44,0,0,1-2.64,2.67h-14Z" transform='scale(0.9)' />
                </svg>
              </Link>
              <Link
                to="/rooms"
                onClick={this.animateTabbar.bind(this)}
                href="home"
                data-label="rooms"
              >
                <span id="span-rooms" />
                <svg
                  id="3"
                  x="0px"
                  y="0px"
                  viewBox="10 0 50 60"
                  width="35px"
                  height="35px"
                >
                  <g>
                  <path d="M35.78,10.84c.42.15.87.27,1.27.45a4.24,4.24,0,0,1,2.19,2.24.49.49,0,0,0,.52.34c.93,0,1.86,0,2.79,0a1.52,1.52,0,0,1,1.62,1.62q0,2.93,0,5.85a1.5,1.5,0,0,1-1.6,1.59H27.66a1.5,1.5,0,0,1-1.6-1.59c0-2,0-3.93,0-5.9a1.49,1.49,0,0,1,1.58-1.56c1,0,1.92,0,2.88,0a.52.52,0,0,0,.4-.2,4.56,4.56,0,0,1,3.46-2.75s0,0,.08-.06Z"/><path d="M23,16.88V21.2a4.53,4.53,0,0,0,4.75,4.74H42.46a4.53,4.53,0,0,0,4.73-4.76c0-1.41,0-2.82,0-4.34A34.13,34.13,0,0,1,51,17a2.81,2.81,0,0,1,2.22,2.66V20q0,18,0,36a3,3,0,0,1-2.52,3.1,4.17,4.17,0,0,1-.71,0H20.23A3,3,0,0,1,17,55.91V20.11a3,3,0,0,1,3.21-3.23Zm4.5,17.5-1.79-1.82a1.52,1.52,0,1,0-2.15,2.12l2.8,2.8a1.52,1.52,0,0,0,2.33,0l5.84-5.83a1.52,1.52,0,1,0-2.14-2.13L28,34Zm0,12.1c-.67-.69-1.3-1.35-1.95-2a1.49,1.49,0,0,0-2.12,0,1.47,1.47,0,0,0,0,2.12c1,1,2,2,3,3a1.44,1.44,0,0,0,2.08,0q3.07-3,6.11-6.1a1.4,1.4,0,0,0,.37-1.39,1.51,1.51,0,0,0-2.58-.66c-1.28,1.27-2.56,2.56-3.83,3.84C28.3,45.72,28,46.08,27.56,46.48ZM42.63,35h3a1.51,1.51,0,1,0,0-3H39.75a1.51,1.51,0,1,0,0,3Zm0,9.06H39.78a1.51,1.51,0,0,0-1.64,1.5,1.53,1.53,0,0,0,1.63,1.52h5.8a1.51,1.51,0,1,0,0-3C44.61,44.05,43.63,44.06,42.66,44.06Z"/>
                  </g>
                </svg>
              </Link>
              <Link
                to="/eventi"
                onClick={this.animateTabbar.bind(this)}
                href="home"
                data-label="eventi"
              >
                <span id="span-eventi" />
               
                <svg
                  id="0"
                  x="0px"
                  y="0px"
                  viewBox="0 -5 50 60"
                  width="35px"
                  height="35px"
                >
                <path d="M57.12,60.36H13.6s0-.06-.08-.06A5.34,5.34,0,0,1,9,54.54V18a5.26,5.26,0,0,1,5.16-5.52c1.69-.09,3.38,0,5.07,0l.64,0V9.62a2.59,2.59,0,0,1,2.77-2.83,2.59,2.59,0,0,1,2.79,2.86c0,.8,0,1.6,0,2.41a2.33,2.33,0,0,0,0,.38H45.22c0-1,0-2,0-3a2.59,2.59,0,0,1,2.23-2.57A2.71,2.71,0,0,1,50.66,8.6a5.4,5.4,0,0,1,.14,1.34c0,.83,0,1.66,0,2.54H56a7.58,7.58,0,0,1,1.51.14A5.29,5.29,0,0,1,61.73,18V45.54c0,3.16,0,6.32,0,9.47A5.3,5.3,0,0,1,58,60.1C57.72,60.2,57.42,60.27,57.12,60.36Zm-1.42-35H15.05V54.3H55.7Z" transform="scale(0.8)" /><path d="M40.54,48.29a9.11,9.11,0,0,1-.92-.33q-1.93-1-3.84-2A.76.76,0,0,0,35,46c-1.26.67-2.53,1.31-3.79,2a1.81,1.81,0,0,1-2.06-.06,1.79,1.79,0,0,1-.68-1.94c.26-1.41.47-2.82.72-4.22a.71.71,0,0,0-.23-.74c-1-1-2-2-3.06-3a1.83,1.83,0,0,1-.61-2A1.87,1.87,0,0,1,27,34.73c1.43-.2,2.86-.41,4.28-.65a.75.75,0,0,0,.48-.38c.66-1.29,1.3-2.58,1.93-3.88a1.8,1.8,0,0,1,1.7-1.17,1.78,1.78,0,0,1,1.7,1.16c.63,1.3,1.27,2.59,1.94,3.87a.92.92,0,0,0,.57.41c1.44.24,2.89.44,4.33.66a1.8,1.8,0,0,1,1,3.19c-1,1-2.06,2-3.1,3a.72.72,0,0,0-.25.74c.27,1.47.51,2.94.76,4.42A1.86,1.86,0,0,1,40.54,48.29Z" transform="scale(0.8)" />
                </svg>
              </Link>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/rewards" component={Rewards} />
            <Route path="/materials" component={Materials} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/eventi" component={Eventi} />
          </section>
        </Router>
      </>
    );
  }
}
export default Tabbar;
