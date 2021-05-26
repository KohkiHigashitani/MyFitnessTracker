import React from 'react';
import {View, Text, Button} from 'react-native';

const counterApp = () => {
    return (
        <View>
            <Text>Current Value: {count}</Text>
            <Button title='Increment' onPress={()=> setCount(value: count+1)} />
            <Button title='Decrement' onPress={()=>setCount(value:prevState: number)} />
        </View>)}