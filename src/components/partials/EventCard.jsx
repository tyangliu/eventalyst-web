'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class EventCard extends Component {

  render() {
    return (
      <div style={styles.card}>
        <ul style={styles.tagsList}>
          <li style={[styles.tag, {background: 'rgba(0,183,178,1)'}]}>Technology</li>
        </ul>
        <h3 style={styles.title}>The 1337 Hackathon</h3>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>
            <i style={styles.icon} className='material-icons'>people</i>
            The Hackers
          </li>
          <li style={styles.infoItem}>
            <i style={styles.icon} className='material-icons'>place</i>
            Vancouver, BC
          </li>
        </ul>
        <div style={styles.photo} />
        <div style={styles.voteContainer}>
          <button style={styles.voteButton}>
            <i style={styles.icon} className='material-icons'>thumb_up</i>
            Vote for Event
          </button>
          <p style={styles.voteCount}>20593 votes</p>
        </div>
      </div>
    );
  }

}

const styles = styler`
  card
    border: 1px solid rgba(221,221,221,1)

  tagsList
    padding: 16px 24px
    text-align: right

  tag
    padding: 6px 14px
    color: rgba(255,255,255,1)
    margin-left: 10px
    display: inline-block

  title
    font-size: 24px
    font-weight: 700
    padding: 0 24px 16px
    border-bottom: 1px solid rgba(238,238,238,1)

  infoList
    padding: 16px 24px
    border-bottom: 1px solid rgba(238,238,238,1)

  infoItem
    overflow-y: hidden
    position: relative
    line-height: 1.5em
    padding: 4px 0

  icon
    font-size: 20px
    float: left
    padding-right: 14px

  photo
    height: 200px
    background: rgba(57,96,142,1)

  voteCount
    padding: 16px 24px

  voteButton
    padding: 16px 24px
    border: none
    float: right
    border-left: 2px solid rgba(238,238,238,1)
    background: none
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 20px
    outline: none
    color: rgba(239,67,121,1)
`;
