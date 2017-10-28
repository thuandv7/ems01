/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import AppWithNavigationState from '../src/navigators';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import { createStore } from 'redux';

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