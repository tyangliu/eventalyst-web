'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class Home extends Component {

  render() {
    return (
      <div>
        <section style={styles.hero}>
          <h1 style={styles.heading}>Make events happen.</h1>
          <p>
            <span style={{display: 'block'}}>
              <span style={{fontStyle: 'italic'}}>Eventalyst</span> connects event sponsors, organizers, and seekers
            </span>
            <span style={{display: 'block'}}>
              to turn the best event ideas into reality.
            </span>
          </p>
        </section>
      </div>
    );
  }

}

const styles = styler`
  hero
    padding: 24px
    position: relative
    height: 800px
    text-align: center

  heading
    font-family: 'grueber', sans-serif
    font-size: 36px
    line-height: 1.5em

`;
