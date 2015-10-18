'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';
import EntryLinks from './EntryLinks.jsx';
import UserMenu from './UserMenu.jsx';

@Radium
export default class NavBar extends Component {

  static defaultProps = {
    isLoggedIn: false
  };

  render() {
    return (
      <nav style={styles.nav} className="mainNav">
        <Link to='/events'><h1 style={styles.logo}>eventalyst</h1></Link>
        {this.props.isLoggedIn ? <UserMenu /> : <EntryLinks />}
      </nav>
    );
  }

}

const styles = styler`
  nav
    height: 76px
    padding: 20px 24px
    position: absolute
    top: 0
    z-index: 100
    width: 100%

  logo
    font-family: 'jaf-facitweb', sans-serif
    font-weight: 700
    font-size: 24px
    line-height: 36px
    color: rgba(239,67,121,1)
    float: left
`;
