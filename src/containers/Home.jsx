'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class Home extends Component {

  componentWillMount() {
    this.props.setLoggedIn(false);
  }

  render() {
    return (
      <div>
        <section style={styles.hero}>
          <h1 style={styles.heading}>Make events happen.</h1>
          <p style={styles.subheading}>
            <span style={{fontStyle: 'italic'}}>Eventalyst </span>
            connects event sponsors, organizers, and seekers
            to turn great event ideas into reality.
          </p>
          <div style={styles.previewBox} />
        </section>
        <section style={styles.descriptionsContainer}>
          <h2 style={styles.title}>I want to</h2>
          <ul style={styles.roleTabsList}>
            <li style={styles.roleTab}>Host an Event</li>
            <li style={styles.roleTab.active}>Sponsor an Event</li>
            <li style={styles.roleTab}>Attend an Event</li>
          </ul>
        </section>
      </div>
    );
  }

}

const styles = styler`
  hero
    padding: 24px
    position: relative
    height: 500px
    text-align: center
    overflow-y: hidden

  heading
    font-family: 'grueber', sans-serif
    font-size: 36px
    margin-bottom: 18px
    line-height: 1.3em

  subheading
    margin-bottom: 36px

  previewBox
    margin: 0 auto
    width: 80%
    max-width: 800px
    height: 800px
    border-radius: 5px
    background-color: rgba(0,0,0,0.1)
    background-image: url(${require('../images/screenshot.png')})
    background-position: top center
    background-size: contain
    box-shadow: 0px -1px 4px rgba(0,0,0,0.2)

  descriptionsContainer
    color: rgba(255,255,255,1)
    padding: 36px 0 24px
    text-align: center
    min-height: 400px
    background: rgba(0, 183, 178, 1)

  title
    font-size: 24px
    margin-bottom: 16px
    line-height: 1.3em
    font-weight: 700
    letter-spacing: 1px
    text-transform: uppercase

  roleTabsList

  roleTab
    display: inline-block
    padding: 18px 26px
    width: 180px
    font-weight: 700
    cursor: pointer

    &active
      border-bottom: 2px solid rgba(255,255,255,0.7)
`;
