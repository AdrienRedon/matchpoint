import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Header from './Header';
import MyAppText from './MyAppText';

export default class CalendarScene extends Component {
    static propTypes = {
        onBack: PropTypes.func.isRequired
    }

    render() {
        return (
            <View>
                <Header/>
                <TouchableHighlight onPress={() => this.props.onBack(11623)}>
                    <View style={styles.returnBar}>
                        <Image source={require('../assets/ic_chevron_l.png')} style={styles.chevron}></Image>
                        <MyAppText style={styles.returnBarText}>Back to Random Club</MyAppText>
                    </View>
                </TouchableHighlight>
                <Image source={require('../assets/img_club.png')} style={styles.backImg}>
                    <MyAppText style={styles.teamName}>TEAM NAME</MyAppText>
                    <TouchableHighlight style={styles.followBtn}>
                        <MyAppText style={styles.followTxt}>Suivre</MyAppText>
                    </TouchableHighlight>
                    <View style={styles.navBar}>
                        <TouchableHighlight style={styles.navBarElement}>
                            <MyAppText style={styles.navBarText}>Calendrier</MyAppText>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navBarElement}>
                            <MyAppText style={styles.navBarText}>Classement</MyAppText>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.navBarElement}>
                            <MyAppText style={styles.navBarText}>Joueurs</MyAppText>
                        </TouchableHighlight>
                    </View>
                </Image>
                <View>
                    <MyAppText>PROCHAINS MATCHS</MyAppText>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    returnBar: {
        flexDirection: "row",
        backgroundColor: "#3c414b",
        height: 40
    },
    chevron: {
        marginLeft: 10,
        alignSelf: "center"
    },
    returnBarText: {
        color: "white",
        marginLeft: 20,
        alignSelf: "center"
    },
    teamName: {
        color: "white",

    },
    followTxt: {
        color: "white"
    },
    backImg: {
        height: 140,
        alignSelf: "center",
        resizeMode: "cover",
        justifyContent: "flex-end",
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
        margin: 8,
        marginBottom: 30,
        borderRadius: 3,
        borderWidth: 1,
        padding: 5,
        borderColor: "white",
        alignSelf: "flex-end"
    },
    navBarText: {
        color: "white",
    },
    navBarElement: {
        alignSelf: "center"
    }
});