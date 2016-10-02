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
                        <Image source={require('../assets/ic_chevron_l.png')}></Image>
                        <MyAppText style={styles.returnBarText}>Back to Random Club</MyAppText>
                    </View>
                </TouchableHighlight>
                <Image source={require('../assets/img_club.png')} style={styles.backImg}>
                    <MyAppText style={styles.teammName}>TEAM NAME</MyAppText>
                    <TouchableHighlight onPress={() => this.props.onBack(11623)} style={styles.followBtn}>
                        <MyAppText style={styles.followTxt}>Suivre</MyAppText>
                    </TouchableHighlight>
                </Image>
                <View style={styles.navBar}>
                    <TouchableHighlight onPress={() => this.props.onBack(11623)}>
                        <MyAppText>Calendrier</MyAppText>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.onBack(11623)}>
                        <MyAppText>Classement</MyAppText>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.onBack(11623)}>
                        <MyAppText>Joueurs</MyAppText>
                    </TouchableHighlight>
                </View>
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
        backgroundColor: "#3c414b"
    },
    returnBarText: {
        color: "white"
    },
    teammName: {
        color: "white"
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
        justifyContent: "space-around"
    },
    followBtn: {
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});