'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class EventCard extends Component {

  static defaultProps = {
    event: {}
  };

  render() {
    let event = this.props.event;

    let tags = event.tags && event.tags.map ? event.tags.map(tag =>
      <li style={[styles.tag, {background: 'rgba(0,183,178,1)'}]}>{tag}</li>
    ) : [];

    tags = tags.slice(0,2);

    let id = event._id
      , creatorName = event.creator ? event.creator.name : ''
      , name = event.name
      , city = event.city
      , votes = event.votes
      , imageUrl = event.imageUrl || '';

    return (
      <div style={styles.card}>
        <ul style={styles.tagsList}>
          {tags}
        </ul>
        <Link to={'/events/' + id}>
          <h3 style={styles.title}>{name}</h3>
        </Link>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>
            <i style={styles.icon} className='material-icons'>people</i>
            {creatorName}
          </li>
          <li style={styles.infoItem}>
            <i style={styles.icon} className='material-icons'>place</i>
            {city}
          </li>
        </ul>
        <Link to={'/events/' + id}>
          <div style={[styles.photo, {
            backgroundImage: `url(${imageUrl})`
          }]} />
        </Link>
        <div style={styles.voteContainer}>
          <button style={styles.button.sponsor}>
            <i style={styles.icon} className='material-icons'>loyalty</i>
            Sponsor
          </button>
          <button style={styles.button.vote}>
            <i style={styles.icon} className='material-icons'>thumb_up</i>
            Vote
          </button>
          <p style={styles.voteCount}>{votes} votes</p>
        </div>
      </div>
    );
  }

}

const styles = styler`
  card
    border: 1px solid rgba(221,221,221,1)

  tagsList
    min-height: 66px
    padding: 16px 24px
    text-align: right

  tag
    padding: 3px 14px
    color: rgba(255,255,255,1)
    margin-left: 10px
    font-size: 13px
    display: inline-block

  title
    white-space: nowrap
    height: 53px
    font-size: 24px
    text-overflow: ellipsis
    overflow: hidden
    font-weight: 700
    padding: 0 24px 16px
    color: rgba(63,63,63,1)
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
    background-color: rgba(57,96,142,1)
    background-size: cover
    background-position: center

  voteCount
    padding: 16px 24px

  button
    padding: 16px 24px
    border: none
    float: right
    border-left: 2px solid rgba(238,238,238,1)
    background: none
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 20px
    outline: none
    cursor: pointer

    &vote
      color: rgba(239,67,121,1)

    &sponsor
      color: rgba(15,191,188,1)
`;
