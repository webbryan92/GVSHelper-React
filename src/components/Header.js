import React from "react";
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from "react-bootstrap";

//Navbar controlling the navigation of the site
const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">GVSHelper</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/Terms">
          Terms
        </NavItem>
        <NavDropdown eventKey={2} title="Suits" id="basic-nav-dropdown">
          <MenuItem eventKey={2.4} href="/suits/500">
            500
          </MenuItem>
          <MenuItem eventKey={2.1} href="/suits/400">
            400
          </MenuItem>
          <MenuItem eventKey={2.2} href="/suits/300">
            300
          </MenuItem>
          <MenuItem eventKey={2.3} href="/suits/200">
            200
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
