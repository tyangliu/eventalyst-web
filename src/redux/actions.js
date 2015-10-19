'use strict';

import fetch from 'isomorphic-fetch';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const ADD_EVENT = 'ADD_EVENT';
export const VOTE_EVENT = 'VOTE_EVENT';
export const SPONSOR_EVENT = 'SPONSOR_EVENT';
export const INVALIDATE_EVENTS = 'INVALIDATE_EVENTS';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export function login(userId, password) {
  return {
    type: LOGIN,
    userId,
    password
  };
}

export function logout() {
  return { type: LOGOUT };
}

export function addEvent(userId, eventData) {
  return {
    type: ADD_EVENT,
    userId,
    eventData
  };
}

export function voteEvent(userId, eventId) {
  return {
    type: VOTE_EVENT,
    userId,
    eventId
  };
}

export function sponsorEvent(userId, eventId) {
  return {
    type: SPONSOR_EVENT,
    userId,
    eventId
  };
}

export function invalidateEvents(userId) {
  return {
    type: INVALIDATE_EVENTS,
    userId
  };
}

export function requestEvents(userId) {
  return {
    type: REQUEST_EVENTS,
    userId
  };
}

export function receiveEvents(userId, json) {
  return {
    type: RECEIVE_EVENTS,
    userId,
    events: json,
    receivedAt: Date.now()
  };
}

function fetchEvents(userId) {
  console.log('test');
  return dispatch => {
    // notify beginning of fetch
    dispatch(requestEvents(userId));
    // do request here
    return fetch(`http://159.203.68.160/events`)
      .then(response => response.json())
      .then(json => { dispatch(receiveEvents(userId, json)); });
  };
}

function shouldFetchEvents(state, userId) {
  const events = state.events;
  return true;
  if (!events) {
    return true;
  } else if (events.isFetching) {
    return false;
  } else {
    return events.didInvalidate;
  }
}

export function fetchEventsIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchEvents(getState(), userId)) {
      return dispatch(fetchEvents(userId));
    } else {
      return Promise.resolve();
    }
  };
}
