import React from 'react';
import {StyleSheet, View} from 'react-native';

const TrafficLightFlex = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, height: 80, backgroundColor: "red"}} />
            <View style={{ flex: 2, height: 80, backgroundColor: "yellow"}} />
            <View style={{ flex: 3, height: 80, backgroundColor: "green"}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default TrafficLightFlex