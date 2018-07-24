import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from 'images/icon.png';
import 'styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar is-fixed">
        <img className="logo" src={logo} alt="Musik" />
        <input className="Search" type="text" placeholder="Search for music..." />
        <span className="spacer" />
        { /* <FontAwesomeIcon className="menu" icon={faBars} /> */ }
      </div>
    );
  }
}

export default Navbar;
