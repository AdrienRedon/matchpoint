import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class EventsScene extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { events: 'chargement en cours...'};
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
        console.log(responseJson.championnat);
        this.setState({events: responseJson.championnat});
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
          {this.state.events}
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