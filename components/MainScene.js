import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import EventsScene from './EventsScene'
import ClubsScene from './ClubsScene'
import LoginScene from './LoginScene'
import WelcomeScene from './WelcomeScene'

export default class MainScene extends Component {

  render() {
    return (
      <View style={styles.container}>
        {(() => {
        switch (this.props.index) {
          case 0: return <WelcomeScene onSignIn={() => this.props.onForward(null, 1)} onLogIn={() => this.props.onForward(null, 2)} />;
          case 1: return <LoginScene libBtn="s'inscrire" onForward={() => this.props.onForward(null, 2)} onBack={this.props.onBack} />;
          case 2: return <LoginScene libBtn="se connecter" onForward={this.props.onForward} onBack={this.props.onBack} />;
          case 3: return <ClubsScene onForward={this.props.onForward} onBack={this.props.onBack} />;
          case 4: return <EventsScene club_id={this.props.club_id} onForward={this.props.onForward} onBack={this.props.onBack} />;
          default: return <ClubsScene onForward={this.props.onForward} onBack={this.props.onBack} />;
        }
      })()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});