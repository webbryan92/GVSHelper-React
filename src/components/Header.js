import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <span className="icn-logo"><i className="material-icons">gvshelper</i></span>
      <ul className="main-nav">
        <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Terms</NavLink></li>
        <li><NavLink to="/suits/500" activeStyle={{ background: 'tomato' }}>500</NavLink></li>
        <li><NavLink to="/suits/400" activeStyle={{ background: 'tomato' }}>400</NavLink></li>
        <li><NavLink to="/suits/300" activeStyle={{ background: 'tomato' }}>300</NavLink></li>
        <li><NavLink to="/suits/200" activeStyle={{ background: 'tomato' }}>200</NavLink></li>
      </ul>     
    </header>
  );
  
  export default Header;