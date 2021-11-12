import React, {useState} from 'react';
import {Modal, View, StyleSheet, Text, TextInput} from 'react-native';
import Clue_Btn from './source_code/Custom_component/Clue_btn';
import Check_Btn from './source_code/Custom_component/Check_btn';
import Clue_Modal from './source_code/Custom_component/Clue_modal'

export default function App() {
  const [visibleClue, setVisibleClue] = useState(false);
  const [content, setcontent] = useState('')
  const changeVisibleClue = (bool) => {
    setVisibleClue(bool);
  }
  const addcontent=(data)=>{
    setcontent(content+' '+data);
  }
  return (
    <View style={styles.container}>

      <View style={styles.container_img}>

      </View>
      
      <View style = {styles.select_section}>

      </View>

      <TextInput style = {styles.title_input} 
        placeholder='Title' />

      <TextInput style = {styles.write_input} 
        placeholder='Write your diary here!' 
        onChangeText = {text=>setcontent(text)}
        multiline = {true}
        value={content}/>

      <View style = {styles.containerBtn}>
        <View style = {styles.clue_btn}>
          <Clue_Btn onPress = {()=>setVisibleClue(!visibleClue)}/>
        </View>
        <View style ={styles.check_btn}>
            <Check_Btn/>
        </View>
      </View> 
      
      <Modal 
        visible = {visibleClue} 
        onRequestClose = {()=>changeVisibleClue(false)} >
        <Clue_Modal changeModalVisible = {changeVisibleClue}
        setcontent = {addcontent}/>
      </Modal>      
    </View>   
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FEF9EF'
  },
  container_img:{
    height: '25%',
    backgroundColor: '#345'
  },
  select_section:{
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#789'
  },
  title_input:{
    fontSize: 16,
    width: '90%',
    Height: '3%',
    maxHeight: '3%',
    marginTop: '5%',
    borderColor: '#E5E5E5',
    borderWidth: 3,
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: '5%',
    textAlign: 'center'
  },
  write_input:{
    fontSize: 15,
    width: '90%',
    minHeight: '40%',
    marginTop: '3%',
    borderColor: '#E5E5E5',
    borderWidth: 3,
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: '5%',
  },
  containerBtn: {
    marginTop: '5%',
    flexDirection: 'row',
},
  clue_btn: {
      width: '50%',
      paddingLeft: '10%'
  },
  check_btn:{
      paddingLeft:'33%',
      width: '50%',
  }
});