import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class ClubsScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
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
    marginTop: 50,
  },
});