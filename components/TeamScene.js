import React, { Component, PropTypes } from 'react';
import {Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { getEvents } from '../utils/api';
import Header from './Header';
import MyAppText from './MyAppText';

export default class TeamScene extends Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [], championnat: ''
    }  
  }

  componentDidMount() {
    this.loadTeams(); 
    let responseJson = getEvents(this.props.club_id)
      .then((responseJson) => { 
        this.setState({ 
          championnat: responseJson.championnat, 
        });
    });
  }

  loadTeams() {
    this.setState({list: [
       {id: '11623', championnat: 'SENIOR MASCULIN (N1)'},
        {id: '183754', championnat: 'SENIOR MASCULIN (PEM)'}
    ]});
  }

  render() {
      contents = this.state.list.map((team) => {
        return (
          <TouchableHighlight onPress={() => this.props.onForward(this.props.club_id)}>
            <View style={styles.listItem}>
                <MyAppText style={styles.listItemName}>{team.championnat}</MyAppText>
                <Image style={styles.chevron} source={require('../assets/ic_chevron_r.png')}>
                </Image>
            </View>
          </TouchableHighlight>
        );
     });
    return (
        <View style={styles.container}>
            <Header/>
            <TouchableHighlight onPress={() => this.props.onBack(11623)}>
                <View style={styles.returnBar}>
                    <Image source={require('../assets/ic_chevron_l.png')} style={styles.chevron}></Image>
                    <MyAppText style={styles.returnBarText}>Back to Random Club</MyAppText>
                </View>
            </TouchableHighlight>
            <Image source={require('../assets/img_club.png')} style={styles.backImg}>
                <View style={styles.clubInfo}>
                    <View style={styles.teamLogoBg}>
                        <Image source={require('../assets/ic_team_own.png')} style={styles.logo}></Image>
                    </View>
                    <View style={styles.clubInfoTxt}>
                        <MyAppText style={styles.clubNameTxt}>The Random Club</MyAppText>
                        <MyAppText style={styles.clubSportTxt}>Basketball</MyAppText>
                    </View>
                    <TouchableHighlight style={styles.followBtn}>
                        <MyAppText style={styles.followTxt}>Suivre</MyAppText>
                    </TouchableHighlight>
                </View>
                <View style={styles.navBar}>
                    <TouchableHighlight style={styles.navBarElement}>
                        <MyAppText style={styles.navBarActiveText}>Équipes</MyAppText>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navBarElement}>
                        <MyAppText style={styles.navBarUnactiveText}>Actualité</MyAppText>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navBarElement}>
                        <MyAppText style={styles.navBarUnactiveText}>Infos</MyAppText>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navBarElement}>
                        <MyAppText style={styles.navBarUnactiveText}>Photos</MyAppText>
                    </TouchableHighlight>
                </View>
            </Image>
            <View>
                {contents}
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
    },
    listItem: {
        backgroundColor: "white",
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E1E1E1",
        justifyContent: "space-between",
    },
    clubNameTxt: {
        fontSize: 18,
        color: "white",
    },
    clubSportTxt: {
        color: "rgba(255, 255, 255, 0.3)",
        fontSize: 18,
    },
    clubInfo: {
        flex: 1,
        flexDirection: "row",
        margin: 20,
    },
    clubInfoTxt: {
        backgroundColor: "rgba(0,0,0,0)",
        flex: 1,
    },
    teamLogoBg: {
        backgroundColor: "rgba(26,39,53, 0.7)",
        borderRadius: 15,
        height: 80,
        width: 80,
        paddingTop: 5,
        marginRight: 20,
    },
    logo: {
        height: 70,
        width: 63,
        alignSelf: "center",
    },
    returnBar: {
        flexDirection: "row",
        backgroundColor: "#3c414b",
        height: 40
    },
    chevron: {
        marginLeft: 12,
        height: 10,
        width: 10,
        alignSelf: "center"
    },
    returnBarText: {
        color: "white",
        marginLeft: 20,
        alignSelf: "center"
    },
    followTxt: {
        color: "white"
    },
    backImg: {
        height: 160,
        alignSelf: "center",
        resizeMode: "cover",
        width: 375,
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#1A2735",
        height: 40
    },
    followBtn: {
        width: 60,
        borderRadius: 3,
        borderWidth: 1,
        padding: 5,
        alignItems: "center",
        borderColor: "white",
        alignSelf: "flex-end"
    },
    navBarActiveText: {
        color: "white",
    },
    navBarUnactiveText: {
        color: "rgba(255,255,255,0.5)",
    },
    navBarElement: {
        alignSelf: "center"
    }
});