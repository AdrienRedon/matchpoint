import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class LoginScene extends Component {
  static propTypes = {
    onForward: PropTypes.func.isRequired,
  }

  render() {
    const confirmPwd = (this.props.libBtn == "s'inscrire") ? <TextInput style={{height: 40}} placeholder="Confirm password" secureTextEntry /> : null;
    return (
      <View style={styles.wrapper}>
        <View style={styles.hero}>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>
            {this.props.libBtn}
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="login@domain.com"
          />
          <TextInput
            style={{height: 40}}
            placeholder="Password"
            secureTextEntry
          />
          {confirmPwd}
          <TouchableHighlight onPress={this.props.onForward} style={styles.loginButton}>
            <Text>Go !</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  hero: {
    flex: 1
  },
  container: {
    flex: 3,
    marginTop: 50,
  },
  loginButton: {
      backgroundColor: "blue",
  }
});