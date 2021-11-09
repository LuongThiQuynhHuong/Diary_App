import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button}>
          <Image source = {require("../Diary_App/assets/back_btn.png")}/>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    height: 40,
    width: 40,
    backgroundColor: "#bf8"
  }
});
