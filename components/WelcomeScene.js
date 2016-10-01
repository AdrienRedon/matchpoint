import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class WelcomeScene extends Component {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onLogIn: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onSignIn} style={styles.signInBtn}>
          <Text>S'inscrire</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onLogIn} style={styles.loginBtn}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "red",
    paddingBottom: 50
  },
  
});