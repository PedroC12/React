import React, { Component } from 'react';
import logo from './imagem/logo.png'
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
            <div className="logo">
                <a href="#"><img src={logo} alt="logo"/></a>
            </div>
            <div className="menu">
                <a href="">Home</a>
                <a href="">News</a>
                <a href="">About</a>
                <a href="">É nois</a>
            </div>
        </nav>
    );
  }
}

export default Navbar;
