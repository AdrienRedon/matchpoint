import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainScene from './components/MainScene';

class matchpoint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      club_id: null,
      events: null
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={{ index: 0 }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        renderScene={(route, navigator) =>
          <MainScene

          index={this.state.index}
          club_id={this.state.club_id}

            // Function to call when a new scene should be displayed           
            onForward={ (club_id, nb=1) => {    
              const nextIndex = route.index + nb;
              navigator.push({
                index: nextIndex,
              });
              this.setState({index: nextIndex, club_id});
            }}

            onBack={ (club_id) => {
              if (route.index > 0) {
                const prevIndex = route.index - 1;
                navigator.pop();
                this.setState({index: prevIndex, club_id});
              }
            }}

          />
        }
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('matchpoint', () => matchpoint);
