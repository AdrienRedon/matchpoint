import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Header from './Header';
import MyAppText from './MyAppText';
import { getEvents } from '../utils/api';

export default class CalendarScene extends Component {
    static propTypes = {
        onBack: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { championnat: '', date: '', team1: '', team2: '', score: '' };
     }

    componentDidMount() {
        console.log(this.props.club_id);
        let responseJson = getEvents(this.props.club_id)
            .then((responseJson) => {
                console.log('res in cal', responseJson);
                this.setState({ 
                    championnat: responseJson.championnat, 
                    date: responseJson.date, 
                    team1: responseJson.team1, 
                    team2: responseJson.team2, 
                    score: responseJson.score 
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
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
                    <MyAppText style={styles.teamName}>{this.state.championnat}</MyAppText>
                    <TouchableHighlight style={styles.followBtn}>
                        <MyAppText style={styles.followTxt}>Suivre</MyAppText>
                    </TouchableHighlight>
                    <View style={styles.navBar}>
                        <TouchableHighlight style={styles.navBarElement, styles.activeTabElement}>
                            <MyAppText style={styles.navBarText, styles.activeTabText}>Calendrier</MyAppText>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navBarElement}>
                            <MyAppText style={styles.navBarText}>Classement</MyAppText>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navBarElement}>
                            <MyAppText style={styles.navBarText}>Joueurs</MyAppText>
                        </TouchableHighlight>
                    </View>
                </Image>
                <MyAppText style={styles.nextGamesTitle}>PROCHAINS MATCHS</MyAppText>
                <View style={styles.nextGame}>
                    <Text>Date: {this.state.date}</Text>
                    <Text>Team1: {this.state.team1}</Text>
                    <Text>Team2: {this.state.team2}</Text> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
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
    teamName: {
        color: "white",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 30,
        backgroundColor: "rgba(0,0,0,0)",
        justifyContent: "center"
    },
    followTxt: {
        color: "white",
        textAlign: "center"
    },
    backImg: {
        height: 120,
        alignSelf: "center",
        resizeMode: "cover",
        justifyContent: "flex-end",
        width: 375,
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#1A2735",
        height: 40,
    },
    followBtn: {
        width: 60,
        borderRadius: 3,
        borderWidth: 1,
        padding: 5,
        alignItems: "center",
        borderColor: "white",
        alignSelf: "flex-end",
        marginBottom: 10,
        marginRight: 10,
    },
    navBarText: {
        color: "#777",
        paddingLeft: 20,
        paddingRight: 20
    },
    navBarElement: {
        alignSelf: "center",
    },
    activeTabElement: {
        paddingTop: 12,
        borderBottomWidth: 2,
        borderBottomColor: "#e53320",
    },
    activeTabText: {
        color: "white"
    },
    nextGamesTitle: {
        margin: 10,
        color: "#777"
    }
});