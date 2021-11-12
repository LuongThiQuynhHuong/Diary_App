import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Clue_Btn = (props) => {
  return (
    <TouchableOpacity
    onPress = {props.onPress}
    style={styles.button}>
    <Icon name="clipboard" size={22} color="#000"/>
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
    backgroundColor: '#A2D2FF',
    borderWidth: 1
  }
});

export default Clue_Btn;