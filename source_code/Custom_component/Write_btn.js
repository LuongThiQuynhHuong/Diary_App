import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Write_Btn = (props) => {
  return (  
  <TouchableOpacity
    onPress = {props.onPress}
    style={styles.button}>
    <Icon name="pencil" size={35} color="#000000"/>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#FEE440',
    borderWidth: 0.2,
    position:'absolute',
    bottom: 20,
    right: 20
  }
});

export default Write_Btn;