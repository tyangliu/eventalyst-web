'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import chunk from 'chunk';
import styler from 'react-styling';
import { EventCard } from '../components';
import { fetchEventsIfNeeded, invalidateEvents } from '../redux/actions';

@Radium
export default class Events extends Component {

  componentWillMount() {
    this.props.setLoggedIn(true);
  }

  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(fetchEventsIfNeeded('562341d0792aacd4437ef07a'));
  }

  render() {
    const { events, isFetching, lastUpdated } = this.props;

    let cards = events.map((event, index) =>
      <div style={styles.cardContainer} key={'card'+index}>
        <EventCard event={event} />
      </div>
    );

    let cardsRows = chunk(cards, 3).map(row =>
      <div style={styles.cardsRow}>
        {row}
        <div style={styles.clearfix} />
      </div>
    );

    return (
      <div style={styles.events}>
        <div style={styles.search}>
          <i className='material-icons' style={styles.icon}>search</i>
          <input style={styles.searchInput} type='text' placeholder='Search for tags' />
        </div>
        {cardsRows}
      </div>
    );
  }

}

const styles = styler`
  events
    padding: 24px 12px

  cardContainer
    padding: 0 12px
    float: left
    width: 33.33%

    @media (max-width: 1080px)
      width: 100%
      margin-bottom: 24px

  icon
    font-size: 20px
    line-height: 24px
    float: left
    padding-right: 14px
    color: rgba(0,0,0,0.3)

  search
    background: rgba(0,0,0,0.033)
    padding: 16px 36px
    margin-left: -24px
    margin-right: -24px
    margin-bottom: 36px
    border-bottom: 1px solid rgba(0,0,0,0.1)

  searchInput
    background: rgba(0,0,0,0)
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 24px
    border: none
    width: 40%
    outline: none

  cardsRow
    margin-bottom: 24px

  clearfix
    clear: both
    display: table
`;
