import React, { Component, PropTypes } from 'react';
import {Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/ic_burger.png')} style={styles.icBurger}></Image>
        <Image source={require('../assets/ic_logo_txt_white.png')} style={styles.logoTxtWhite}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#1A2735",
      height: 61,
    },
    icBurger: {
        marginTop: 30,
        margin: 12,
        height: 17,
        width: 23,
    },
    logoTxtWhite: {
        top: 32,
        left: 90,
        width: 85,
        height: 14,
     },
});