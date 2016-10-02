import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import MyAppText from './MyAppText';


export default class WelcomeScene extends Component {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onLogIn: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Image source={require('../assets/img_bg.png')} style={styles.wrapper}>
        <Image source={require('../assets/ic_logo.png')} style={styles.logo}>
         </Image>
        <View style={styles.hero}>
          <Image source={require('../assets/ic_logo_txt.png')} style={styles.logoTxt}>
         </Image> 
         
        </View>
        <View style={styles.container}>
            <TouchableHighlight onPress={this.props.onSignIn} style={[styles.btn, styles.signInBtn]}>
              <MyAppText style={styles.btnTxt}>S'inscrire</MyAppText>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onLogIn} style={[styles.btn, styles.loginBtn]}>
              <MyAppText style={styles.btnTxt}>Se connecter</MyAppText>
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
    flex: 2,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(26, 39, 53, 0.9)",
    paddingBottom: 50
  },
  btn: {
    width: 150,
    margin: 8,
    marginBottom: 30,
    borderRadius: 3,
    borderWidth: 1,
    padding: 5
  },
  btnTxt: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  signInBtn: {
    borderColor: "#5E5E5E"
  },
  loginBtn: {
    borderColor: "#3C414D",
    backgroundColor: "#3C414D"
  },
  logoTxt: {
    height: 75,
    width: 224,
    alignSelf: "center"
  },
  logo: {
    zIndex: 9,
    position: "absolute",
    top: 130,
    left: 20,
    alignSelf: "center",
    height: 350,
    width: 342
  }
});