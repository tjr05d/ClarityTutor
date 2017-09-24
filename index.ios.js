'use strict'
//library imports
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { createLogger } from 'redux-logger'; 
import reducer from './app/reducers/'; 
//file imports
import QuestionPage from './QuestionPage'; 
import LoginForm from './app/components/LoginForm'; 

//creates logging in development mode
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__}); 

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  ); 
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

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

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <View>
          <LoginForm/>
        </View>
      </Provider> 
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

AppRegistry.registerComponent('ClarityTutor', () => App);
