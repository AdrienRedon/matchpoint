import React, { Component, PropTypes } from 'react';
import {Image,View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Header from './Header';

export default class SearchScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Image source={require('../assets/img_home.png')} style={styles.subHeader}>
          
        </Image>
        <Text>Liste des clubs</Text>
        <TouchableHighlight onPress={() => this.props.onForward(11623)}>
          <Text>U.S. NANTUATIENNE</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  subHeader: {
    height: 140,
    alignSelf: "center",
    resizeMode: "cover",
  },

});