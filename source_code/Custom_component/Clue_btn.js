import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Clue_Btn = (props) => {
  return (
    <TouchableOpacity
    onPress = {props.onPressFunciton}
    style={styles.button}>
    <Icon name="clipboard" size={21} color="#FFF"/>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
    width: 33,
    borderRadius: 100
  }
});

export default Clue_Btn;