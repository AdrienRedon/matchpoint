import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class LoginScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="login@domain.com"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight onPress={this.props.onForward} style={styles.loginButton}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  loginButton: {
      backgroundColor: "blue",
  }
});