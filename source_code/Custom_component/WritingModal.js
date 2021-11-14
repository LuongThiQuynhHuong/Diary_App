import React, {useState} from 'react';
import {Platform, Modal, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard,Text, TouchableHighlight} from 'react-native';
import Clue_Btn from './Clue_btn';
import Check_Btn from './Check_btn';
import Clue_Modal from './Clue_modal';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const WritingModal = (props) => {
    const [visibleClue, setVisibleClue] = useState(false);
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('');
    const [mode, setmode] = useState('date')

    // handle datetime
    const [date, setdate] = useState(new Date());
    const [show, setshow] = useState(false);
    const [dateText, setdateText] = useState('Choose Date');

    const onChangeDate = (e, selectedDate) => {
      const currentDate = selectedDate||date;
      setshow(Platform.OS==='ios');
      setdate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth + 1) + '/' + tempDate.getFullYear();
      setdateText(fDate);
    }

    const showMode=(currentMode)=>{
      setshow(true);
      setmode(currentMode);
    }

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
            <TouchableHighlight style={styles.dateContainer} onPress={()=>showMode('date')}>
            <View style={styles.datewrap} >
              <Icon name="calendar" size={18} color="#000"/>
              <Text style = {styles.dateText}>
                {dateText}
              </Text>
              {show && (<DateTimePicker testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        display='default'
                        is24Hour={true}
                        onChange={onChangeDate}/>)}
            </View>
            </TouchableHighlight>
            <View style={styles.emotion}>

            </View>
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
        paddingTop: '1%',
        paddingLeft: '5%',
        height: 20,
        flexDirection:'row',
        justifyContent: 'flex-start'
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
    },
    dateContainer:{
      width:'60%',
      borderWidth: 1,
      padding: 10,
      borderColor: '#2DD6E8',
      borderRadius: 20,
      height:33,
      backgroundColor: '#A2D2FF'
    },
    emotion:{
      width:'30%',
      borderWidth: 1,
      marginLeft: 10,
      borderColor: '#2DD6E8',
      borderRadius: 20,
      height:33,
      backgroundColor: '#A2D2FF'
    },
    dateText: {
      marginLeft: 10,
      fontSize: 15
    },
    datewrap:{
      flexDirection: 'row'
    }
});
