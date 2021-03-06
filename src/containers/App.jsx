'use strict';

import React, { Component, Children, PropTypes } from 'react';
import { connect } from 'react-redux';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Router, Link } from 'react-router';
import { NavBar, Footer } from '../components';

@Radium
class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div style={styles.app}>
      <Style rules={styles.appRules} />
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <main style={styles.main}>
          {React.cloneElement(this.props.children || <div />, {
            setLoggedIn: isLoggedIn => this.setState({isLoggedIn: !!isLoggedIn}),
            key: this.props.location.pathname,
            user: this.props.user,
            isFetching: this.props.isFetching,
            didInvalidate: this.props.didInvalidate,
            events: this.props.events,
            lastUpdated: this.props.lastUpdated,
            dispatch: this.props.dispatch
          })}
        </main>
        <Footer />
      </div>
    );
  }

}

App.propTypes = {
  user: PropTypes.isRequired,
  isFetching: PropTypes.bool.isRequired,
  didInvalidate: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user, events } = state;
  const {
    isFetching, didInvalidate,
    items, lastUpdated
  } = events || {
    isFetching: true,
    items: []
  };

  return {
    user, isFetching, didInvalidate,
    events: items, lastUpdated
  };
}

export default connect(mapStateToProps)(App);

const styles = styler`
  app
    font-family: 'proxima-nova', sans-serif
    font-size: 15px
    line-height: 1.5em
    color: rgba(63,63,63,1)
    display: flex
    flex-direction: column
    min-height: 100vh

  appRules
    *
      box-sizing: border-box
    h1, h2, h3
      line-height: 1.5em
    h1
      font-size: 36px
      font-weight: 500
    h2
      font-size: 30px
    h3
      font-size: 24px
      font-weight: 500
    em
      font-style: italic
    a
      color: rgba(75,116,181,1)
      text-decoration: none
      font-weight: bold
    main
      flex: 1 0 auto
      width: 100%
    div.page-enter
      opacity: 0
      transition: opacity .2s ease-in-out;
    div.page-enter.page-enter-active
      opacity: 1

  main
    margin-top: 76px
`;
