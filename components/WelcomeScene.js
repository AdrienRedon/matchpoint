import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import MyAppText from './MyAppText';


export default class WelcomeScene extends Component {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onLogIn: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onSignIn} style={[styles.btn, styles.signInBtn]}>
          <MyAppText>S'inscrire</MyAppText>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onLogIn} style={[styles.btn, styles.loginBtn]}>
          <MyAppText>Se connecter</MyAppText>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "red",
    paddingBottom: 50
  },
  btn: {
    borderWidth: 1,
    padding: 5
  },
  signInBtn: {

  },
  loginBtn: {

  }
  
});