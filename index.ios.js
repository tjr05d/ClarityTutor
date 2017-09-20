'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import createLogger from 'redux-logger'; 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  NavigatorIOS
} from 'react-native';

import QuestionPage from './QuestionPage'; 

export default class ClarityTutor extends Component { 
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Clarity",
          component: QuestionPage,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ClarityTutor', () => ClarityTutor);
