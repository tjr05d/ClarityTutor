'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native'

export default class QuestionPage extends Component {
    render() {
        return (
            <View>
                <Text style={styles.description}> Questions Page </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65,
    }
});