import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class WelcomeScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onForward} style={styles.signInBtn}>
          <Text>S'inscrire</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onForward} style={styles.loginBtn}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "red"
  },
  
});