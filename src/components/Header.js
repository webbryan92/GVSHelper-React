import React from 'react';
import {
    NavLink
  } from 'react-router-dom';

const Header = () => (
    <header>
      <span className="icn-logo"><i className="material-icons">code</i></span>
      <ul className="main-nav">
        <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Terms</NavLink></li>
        <li><NavLink to="/TierPage" activeClassName="actyMcActiveFace">500</NavLink></li>
        <li><NavLink to="/TierPage">400</NavLink></li>
        <li><NavLink to="/TierPage">300</NavLink></li>
        <li><NavLink to="/TierPage">200</NavLink></li>
      </ul>    
    </header>
  );
  
  export default Header;