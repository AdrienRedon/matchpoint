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
      <View style={styles.wrapper}>
        <View style={styles.hero}>
        </View>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.props.onSignIn} style={[styles.btn, styles.signInBtn]}>
            <MyAppText style={styles.btnTxt}>S'inscrire</MyAppText>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.props.onLogIn} style={[styles.btn, styles.loginBtn]}>
            <MyAppText style={styles.btnTxt}>Se connecter</MyAppText>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  hero: {
    flex: 2,
    backgroundColor: "red"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "rgba(26, 39, 53, 0.9)",
    paddingBottom: 50
  },
  btn: {
    borderWidth: 1,
    padding: 5
  },
  btnTxt: {
    color: "white"
  },
  signInBtn: {

  },
  loginBtn: {

  }
  
});