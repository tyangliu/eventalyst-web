'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import chunk from 'chunk';
import styler from 'react-styling';
import { EventCard } from './partials';

@Radium
export default class Events extends Component {

  componentWillMount() {
    this.props.setLoggedIn(true);
  }

  render() {
    let cards = [1,2,3,4,5,6,7].map((value, index) =>
      <div style={styles.cardContainer} key={'card'+index}><EventCard /></div>
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
