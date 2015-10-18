'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import chunk from 'chunk';
import styler from 'react-styling';

@Radium
export default class EventSingle extends Component {

  componentWillMount() {
    this.props.setLoggedIn(true);
  }

  render() {
    return (
      <div>
        <ul style={styles.tagsList}>
          <li style={[styles.tag, {background: 'rgba(0,183,178,1)'}]}>Technology</li>
        </ul>
        <h1 style={styles.title}>The 1337 Hackathon</h1>
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
          <p style={styles.voteCount}>20593 votes</p>
          <button style={styles.voteButton}>
            <i style={styles.icon} className='material-icons'>thumb_up</i>
            Vote for Event
          </button>
        </div>
        <p style={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }

}

const styles = styler`
  title
    text-align: center
    padding: 24px
    font-size: 36px
    font-weight: 700
    border-bottom: 1px solid rgba(238,238,238,1)

  tagsList
    padding: 16px 24px 8px
    text-align: center

  tag
    padding: 6px 14px
    color: rgba(255,255,255,1)
    margin-left: 10px
    display: inline-block

  infoList
    padding: 16px 24px
    border-bottom: 1px solid rgba(238,238,238,1)
    text-align: center

  infoItem
    display: inline-block
    overflow-y: hidden
    position: relative
    line-height: 1.5em
    padding: 4px 16px

  icon
    font-size: 20px
    float: left
    padding-right: 14px

  photo
    height: 400px
    background: rgba(57,96,142,1)

  voteContainer
    padding: 14px 24px
    text-align: center
    border-bottom: 1px solid rgba(238,238,238,1)

  voteCount
    padding: 10px 24px
    display: inline-block

  voteButton
    padding: 10px 24px
    border: none
    display: inline-block
    border-left: 2px solid rgba(238,238,238,1)
    background: none
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 20px
    outline: none
    color: rgba(239,67,121,1)

  content
    padding: 36px 24px
    max-width: 740px
    line-height: 1.5em
    margin: 0 auto
`;
