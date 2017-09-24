import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Button from 'react-native-button'; 
import { connect } from 'react-redux';
// import { emailChanged, passwordChanged } from '../actions'; 

export default class LoginFrom extends Component {
  emailChanged(value) {
    this.props.emailChanged(value); 
  }

  passwordChanged(value) {
    console.log("Value:", value)
    this.props.passwordChanged(value)
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Hoshi
          label={'Username'}
          borderColor={'#000080'}
          backgroundColor={'#FFF'}
          onChangeText={this.emailChanged.bind(this)}
          value={this.props.email}
        />

        <Hoshi
          label={'Password'}
          borderColor={'#000080'}
          backgroundColor={'#FFF'}
          onChangeText={this.passwordChanged.bind(this)}
          secureTextEntry
        /> 

        <Button
          style={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#000080',
            padding: 20, 
            marginTop: 10
          }}
          styleDisabled={{ color: 'red'}}
          onPress={() => console.log('Pressed')}
        > 
        Login
        </Button> 
      </View> 
    ); 
  }
}

const styles = {
  viewStyle: {
    marginTop: 50, 
  }
}