import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import MyAppText from './MyAppText';

export default class LoginScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Image source={require('../assets/img_bg.png')} style={styles.wrapper}>
        <View style={styles.hero}>
        </View>
        <View style={styles.container}>
          <MyAppText style={styles.header}>
            S'inscrire
          </MyAppText>
          <TextInput
            style={styles.input}
            placeholder="Adresse mail"
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
          />
          <TextInput style={styles.input} placeholder="Confirmer le mot de passe" secureTextEntry />
          <TouchableHighlight onPress={this.props.onForward} style={styles.loginButton}>
            <MyAppText style={styles.loginButtonText}>Go !</MyAppText>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: null,
    height: null
  },
  hero: {
    flex: 1
  },
  container: {
    flex: 3,
    marginTop: 50,
    backgroundColor: "rgba(26, 39, 53, 0.9)"
  },
  loginButton: {
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    height: 60,
    backgroundColor: "#646464",
    borderRadius: 3
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  },
  header: {
    fontSize: 24,
    color: "rgba(255,255,255, 0.5)",
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 16
  },
  input: {
    margin: 3,
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    paddingLeft: 20,
    backgroundColor: "white",
    color: "#787676",
  }
});