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
          case 0: return <WelcomeScene onForward={this.props.onForward} />;
          case 1: return <LoginScene onForward={this.props.onForward} onBack={this.props.onBack} />;
          case 2: return <ClubsScene onForward={this.props.onForward} onBack={this.props.onBack} />;
          case 3: return <EventsScene club_id={this.props.club_id} onForward={this.props.onForward} onBack={this.props.onBack} />;
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