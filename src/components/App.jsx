'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Router, Link } from 'react-router';
import { NavBar, FooterBar } from './partials';

@Radium
export default class App extends Component {

  render() {
    return (
      <div style={styles.app}>
        <NavBar />
        <main style={styles.main}>{this.props.children}</main>
      </div>
    );
  }

}

const styles = styler`
  app
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 1.5em
    color: rgba(63,63,63,1)
    display: flex
    flex-direction: column
    min-height: 100vh

  appRules
    *
      box-sizing: border-box
    h1, h2, h3
      line-height: 1.5em
    h1
      font-size: 36px
      font-weight: 500
      letter-spacing: 1px
    h2
      font-size: 30px
    h3
      font-size: 24px
      font-weight: 500
    em
      font-style: italic
    a
      color: rgba(75,116,181,1)
      text-decoration: none
      font-weight: bold
    main
      flex: 1 0 auto
      width: 100%
    div.page-enter
      opacity: 0
      transition: opacity .2s ease-in-out;
    div.page-enter.page-enter-active
      opacity: 1

  main
    margin-top: 76px
`;
