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

  cardsRow
    margin-bottom: 24px

  clearfix
    clear: both
    display: table
`;
