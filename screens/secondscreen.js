import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function secondScreen() {
  return (
    <View style={style.container}>
      <Text>Second Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });