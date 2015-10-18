import { combineReducers } from 'redux';
import {
  LOGIN, LOGOUT, ADD_EVENT, VOTE_EVENT, SPONSOR_EVENT,
  INVALIDATE_EVENTS, REQUEST_EVENTS, RECEIVE_EVENTS
} from './actions';

function user(state = null, action) {
  switch (action.type) {
  case LOGIN:
    return action.userId;
  case LOGOUT:
    return null;
  default:
    return state;
  }
}

function events(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case INVALIDATE_EVENTS:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case REQUEST_EVENTS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_EVENTS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.events,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({user, events});
export default rootReducer;
