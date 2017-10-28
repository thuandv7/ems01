/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';

import AppWithNavigationState from '../src/navigators';
import { Provider } from 'react-redux';
import { navReducer }  from './reducers';

const appReducer = combineReducers({navReducer});

const store = createStore(appReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
    );
  }
}