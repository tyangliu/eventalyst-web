'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import chunk from 'chunk';
import styler from 'react-styling';
import { fetchEventsIfNeeded } from '../redux/actions';

@Radium
export default class EventSingle extends Component {

  componentWillMount() {
    this.props.setLoggedIn(true);
  }

  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(fetchEventsIfNeeded('562341d0792aacd4437ef07a'));
  }

  render() {
    const { events, isFetching, lastUpdated } = this.props;

    let matching = events.filter(event => event._id == this.props.params.eventId)
      , event = (matching.length > 0) ? matching[0] : {};

    let tags = event.tags && event.tags.map ? event.tags.map(tag =>
        <li style={[styles.tag, {background: 'rgba(0,183,178,1)'}]}>{tag}</li>
    ) : [];

    tags = tags.slice(0,2);

    let creatorName = event.creator ? (event.creator.name || '') : ''
      , name = event.name || ''
      , city = event.city || ''
      , votes = event.votes || 0
      , content = event.content || ''
      , imageUrl = event.imageUrl || '';

    return (
      <div>
        <ul style={styles.tagsList}>
          {tags}
        </ul>
        <h1 style={styles.title}>{name}</h1>
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
        <div style={[styles.photo, {
          backgroundImage: `url(${imageUrl})`
        }]} />
        <div style={styles.voteContainer}>
          <p style={styles.voteCount}>{votes} votes</p>
          <button style={styles.voteButton}>
            <i style={styles.icon} className='material-icons'>thumb_up</i>
            Vote for Event
          </button>
        </div>
        <p style={styles.content}>
          {content}
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
    margin: 0 6px
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
    background-color: rgba(57,96,142,1)
    background-size: cover
    background-position: center

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
