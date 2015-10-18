'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';

@Radium
export default class Footer extends Component {

  static defaultProps = {
    isLoggedIn: false
  };

  render() {
    return (
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Made with <i className='material-icons' style={styles.icon}>favorite</i> by Albert Kim, Kelvin Lau, Peter B., Euphemia Wong, and Thomas Liu
        </p>
      </footer>
    );
  }

}

const styles = styler`
  footer
    padding: 16px 24px
    font-size: 13px
    line-height: 24px
    z-index: 100
    flex: none
    text-align: center

  icon
    font-size: 14px
    line-height: 24px
    display: inline-block
    color: rgba(239,67,121,1)

`;
