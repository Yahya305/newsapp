import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        
        <div className="navbar">
          <NavLink to="/" className="logoo">
            Saims
          </NavLink> 
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
          {/* <div className='right-nav'>
                <NavLink to="/"><button className='btn'>sample</button></NavLink>
            </div>
            <div className='right-nav'>
                <NavLink to="/"><button className='btn'>sample2</button></NavLink>
            </div> */}

          <div className="right-nav">
            <NavLink to={"/"}>General</NavLink>
            {/* <NavLink to="/general">General</NavLink> */}
            <NavLink to="/science">Science</NavLink>
            <NavLink to="/sports">Sports</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/health">Health</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
