import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class MyAppText extends Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }
    render() {
        return (
            <Text style={styles.textGlobal}>
                {this.props.children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    textGlobal: {
        fontFamily: "Arial"
    }
});
