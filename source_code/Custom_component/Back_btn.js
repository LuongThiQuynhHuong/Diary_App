import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Back_Btn = (props) => {
  return (
    <TouchableOpacity
    onPress = {props.onPress}
    style={styles.button}>
    <Icon name="arrow-circle-left" size={40} color="#A2D2FF"/>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: 37,
    borderRadius: 100,
    backgroundColor: '#000'
  }
});

export default Back_Btn;