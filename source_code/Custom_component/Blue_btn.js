import React from 'react';
import { StyleSheet,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

const BlueBtn = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPressFunction}
    >
      <View style = {styles.button}> 
        <Image source = {props.source}/>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 37,
    minWidth: 37
  }
});

export default BlueBtn;