import React from "react";
import logoTransp from "./../icone/logo-transp.png";
import logOut from "./../icone/log-out.svg";
import "./Header.scss";


class Header extends React.Component {
  constructor() {
    super();
    this.state={
      redirect:false
    }
    
    this.logout=this.logout.bind(this);

  }
  logout(){
    window.location.replace("https://happy-beaver.netlify.com");
    localStorage.clear();
    this.setState({
      redirect:false
    })      
  }


  render() {
      return (
        <header>
          <div className="contain">
            <img  src={logoTransp} alt=""/>
            <img src={logOut} onClick={this.logout} alt="logout"/>
  
          </div>
          <h1>{this.props.titoloPagina}</h1>
        
         </header>
      )

   }
}

export default Header;
