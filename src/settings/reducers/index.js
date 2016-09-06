//import layout from './layout';
//import settings from './settings';
//import texts from './texts';
//import design from './design';
//import {combineReducers} from 'redux';
//
//export default combineReducers({
//  layout,
//  settings,
//  texts,
//  design
//});

export default function settings(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

