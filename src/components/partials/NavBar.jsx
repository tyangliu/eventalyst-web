'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class NavBar extends Component {

  render() {
    return (
      <nav style={styles.nav} className="mainNav">
        <h1 style={styles.logo}>eventalyst</h1>
        <ul style={styles.entryLinks}>
          <li style={[styles.entryItem, {
                borderRight: '1px solid rgba(204,204,204,1)',
                paddingRight: '16px'
              }]}>
            <a style={styles.link}>Login</a>
          </li>
          <li style={styles.entryItem}>
            <a style={styles.link}>Sign Up</a>
          </li>
        </ul>
      </nav>
    );
  }

}

const styles = styler`
  nav
    box-sizing: border-box
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

  entryLinks
    float: right
    line-height: 36px

  entryItem
    display: inline-block
    padding-left: 16px

  link
    font-weight: 700
    font-size: 15px
    text-transform: uppercase
    letter-spacing: 1px
    color: rgba(239,67,121,1)
`;
