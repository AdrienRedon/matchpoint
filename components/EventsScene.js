import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class EventsScene extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { championnat: '', date: '', team1: '', team2: '', score: '' };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    fetch('http://localhost:8087/scrape/club/' + this.props.club_id + '/week/2016-10-10', {
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => { 
        this.setState({ 
          championnat: responseJson.championnat, 
          date: responseJson.date, 
          team1: responseJson.team1, 
          team2: responseJson.team2, 
          score: responseJson.score 
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Event {this.props.club_id}
        </Text>

        <Text>
          Championnat: {this.state.championnat}
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