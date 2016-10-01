import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class EventsScene extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired,
  }

onBack() {
  navigator
}

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Event
        </Text>
        
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
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