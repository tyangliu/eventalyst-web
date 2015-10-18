'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class UserMenu extends Component {

  render() {
    return (
      <div style={styles.userMenu}>
        <div style={styles.avatar} />
        <p style={styles.name}>
          Procurify <i style={styles.icon} className="material-icons">keyboard_arrow_down</i>
        </p>

      </div>
    );
  }

}

const styles = styler`
  userMenu
    float: right
    line-height: 36px

  avatar
    float: left
    width: 30px
    height: 30px
    margin-top: 3px
    border-radius: 9999px
    background: rgba(239,67,121,1)

  name
    display: block
    float: right
    margin-left: 6px

  icon
    font-size: 18px
    line-height: 36px
    float: right
    padding-left: 6px
    color: rgba(239,67,121,1)

`;
