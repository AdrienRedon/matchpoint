import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Header from './Header';
import MyAppText from './MyAppText';

export default class HomeScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }
  render() {
    return (      
      <View style={styles.wrapper}>
        <Header/>
        <Image source={require('../assets/img_home.png')} style={styles.wrapper}>
          <Image source={require('../assets/ic_logo.png')} style={styles.logo}>
          </Image>
          <View style={styles.hero}></View>
          <View style={styles.container}>
            <MyAppText style={styles.descriptionText}>
              Matchpoint description. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur dolor.
            </MyAppText>
            <TouchableHighlight onPress={() => this.props.onForward(11623)} style={styles.searchBtn}>
              <MyAppText style={styles.btnTxt}>Rechercher un club</MyAppText>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
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
    flex: 6,
  },
  descriptionText: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    flex: 3,
    textAlign: "center",
    color: "white",
    fontSize: 15
  },
  container: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "rgba(26, 39, 53, 0.9)",
    paddingBottom: 50
  },
  searchBtn: {
    width: 250,
    height: 40,
    margin: 8,
    marginBottom: 50,
    borderRadius: 3,
    borderWidth: 1,
    padding: 5,
    borderColor: "#3C414D",
    backgroundColor: "#3C414D",
    alignSelf: "center"
  },
  btnTxt: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  logo: {
    zIndex: 9,
    position: "absolute",
    top: -30,
    left: 20,
    alignSelf: "center",
    height: 350,
    width: 342
  }
});