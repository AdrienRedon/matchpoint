import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import TeamScene from './TeamScene'
import SearchScene from './SearchScene'
import LoginScene from './LoginScene'
import SignInScene from './SignInScene'
import WelcomeScene from './WelcomeScene'
import HomeScene from './HomeScene'
import CalendarScene from './CalendarScene'

export default class MainScene extends Component {

  render() {
    return (
      <View style={styles.container}>
        {(() => {
          switch (this.props.index) {
            case 0: return <WelcomeScene onSignIn={() => this.props.onForward(null, 1)} onLogIn={() => this.props.onForward(null, 2)} />;
            case 1: return <SignInScene onForward={() => this.props.onForward(null, 2)} onBack={this.props.onBack} />;
            case 2: return <LoginScene onForward={this.props.onForward} onBack={this.props.onBack} />;
            case 3: return <HomeScene onForward={this.props.onForward} onBack={this.props.onBack} />;
            case 4: return <SearchScene onForward={this.props.onForward} onBack={this.props.onBack} />;
            case 5: return <TeamScene club_id={this.props.club_id} onForward={this.props.onForward} onBack={this.props.onBack} />;
            case 6: return <CalendarScene onBack={this.props.onBack} />; 
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