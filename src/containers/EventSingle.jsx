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

    let sponsors = event.sponsors ? event.sponsors.map(sponsor =>
      <li style={styles.sponsorItem}>
        <div style={[styles.sponsorLogo, {
          backgroundImage: `url(${sponsor.logoUrl})`
        }]} />
        <div style={styles.sponsorInfo}>
          <h3 style={styles.sponsorName}>{sponsor.name}</h3>
          <p style={styles.sponsorDescription}>{sponsor.description}</p>
          <p style={styles.sponsorContent}>{sponsor.content}</p>
        </div>
        <div style={styles.clearfix} />
      </li>
    ) : [];

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
          <button style={styles.button.vote}>
            <i style={styles.icon} className='material-icons'>thumb_up</i>
            Vote
          </button>
          <button style={styles.button.sponsor}>
            <i style={styles.icon} className='material-icons'>loyalty</i>
            Sponsor
          </button>
        </div>
        <p style={styles.content}>
          {content}
        </p>
        <div style={styles.sponsorsContainer}>
          <h3 style={styles.sponsorsTitle}>Sponsors</h3>
          <ul>{sponsors}</ul>
        </div>
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

  button
    padding: 10px 24px
    border: none
    display: inline-block
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

  content
    padding: 36px 24px
    max-width: 740px
    line-height: 1.5em
    margin: 0 auto
    border-bottom: 1px solid rgba(238,238,238,1)

  sponsorsContainer
    padding: 16px 24px
    max-width: 788px
    margin: 0 auto

  sponsorsTitle
    text-align: center
    margin-bottom: 24px
    padding-bottom: 16px
    border-bottom: 1px solid rgba(238,238,238,1)

  sponsorItem
    max-width: 740px
    margin: 0 auto
    border-bottom: 1px solid rgba(238,238,238,1)
    margin-bottom: 24px

  sponsorLogo
    float: left
    width: 30%
    height: 160px
    background-position: top center
    background-repeat: no-repeat
    background-size: contain

  sponsorInfo
    float: right
    padding-left: 40px
    width: 70%

  sponsorName
    font-size: 18px
    font-weight: bold

  sponsorDescription
    margin-bottom: 16px
    font-style: italic

  clearfix
    clear: both
    display: table
`;
