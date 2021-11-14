import React, {useState} from 'react';
import {Modal, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Clue_Btn from './Clue_btn';
import Check_Btn from './Check_btn';
import Clue_Modal from './Clue_modal';
import { StatusBar } from 'expo-status-bar';

const WritingModal = (props) => {
    const [visibleClue, setVisibleClue] = useState(false);
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('');

    const changeVisibleClue = (bool) => {
      setVisibleClue(bool);
    };

    const addcontent=(data)=>{
      setcontent(content+' '+data);
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    const closeAndSave = () =>{
      if(!title.trim() && !content.trim()) return props.onClose();
      props.onSubmit(title, content);
      settitle('');
      setcontent('');
      props.onClose();
    }

    const closeWithoutSaving =()=>{
      return props.onClose();
    }


    return (
    <>
      <StatusBar/>
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.container}>

          <View style={styles.container_img}>

          </View>

          <View style = {styles.select_section}>

          </View>

          <TextInput style = {styles.title_input} 
          placeholder='Title'
          onChangeText = {text=>settitle(text)}
          value={title} />

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
            <Check_Btn onPress={closeAndSave}/>
          </View>
        </View> 

        <Modal visible = {visibleClue} 
        onRequestClose = {()=>changeVisibleClue(false)} >
          <Clue_Modal changeModalVisible = {changeVisibleClue}
          setcontent = {addcontent}/>
        </Modal>      
        </View>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
        </TouchableWithoutFeedback>
      </Modal>
    </>
    );
};

export default WritingModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: '20',
        marginTop: '5%',
        borderColor: '#E5E5E5',
        borderWidth: 2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: '5%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    write_input:{
        fontSize: 15,
        width: '90%',
        minHeight: '40%',
        marginTop: '3%',
        borderColor: '#E5E5E5',
        borderWidth: 2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: '5%'
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
    },
    modalBG:{
      flex:1,
      zIndex: -1
    }
});
