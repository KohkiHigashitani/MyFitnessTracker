import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{borderColor:'black', borderWidth: 1}}>
                <View style={{backgroundColor: 'red', height: 50, width: 50}}>
                    <Text>Hello World!</Text>
                </View>
                <View style={{backgroundColor: 'blue', height: 50, width: 50}} />


            );
            }

            const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        });
