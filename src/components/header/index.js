import React, {PureComponent} from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class  Header extends PureComponent {
  render() {
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand  to="/"  className="text-white">Recipe Finder</NavbarBrand>
          <Nav navbar>
              <NavItem>
                <NavLink  to="/" className="text-white">Home</NavLink>
              </NavItem>
          </Nav>
        </Navbar>
      </div>
  )}
}