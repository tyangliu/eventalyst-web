'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class EntryLinks extends Component {

  render() {
    return (
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
    );
  }

}

const styles = styler`
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
