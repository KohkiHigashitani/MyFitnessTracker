import React, { Component } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';


export default class ButtonBasics extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press here to find a workout plan"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press here to view workout log"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Log an exercise"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Exit"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
