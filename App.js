import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
      <Image source = {require('../Diary_App/assets/back_btn.png')}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minHeight: 37,
    minWidth: 37,
    backgroundColor: '#fda'
  }
});
