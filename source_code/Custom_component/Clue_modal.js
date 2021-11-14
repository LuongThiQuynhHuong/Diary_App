import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Back_Btn from './Back_btn'
import Check_Btn from './Check_btn'
import clues from '../ClueQuestion'

const Clue_Modal = (props) =>{
    const [answercontent, setanswercontent] = useState('');
    const [num, setnum] = useState(Math.floor(Math.random() * 5));
    const closeModal = (bool, content)=>{
        props.changeModalVisible(bool);
        if (content != '')
            props.setcontent(content);
    };
    const dismisskeyboard=()=>Keyboard.dismiss();
    return(
        <View style = {styles.modal_container}>
            <View style = {styles.question_container}>
                <Text style={styles.question_text}>{clues[num]}</Text>
            </View>
            <TextInput style = {styles.anwser_input}
                placeholder = 'Write your answer here!'
                multiline = {true}
                onChangeText={text=>setanswercontent(text)}
                value = {answercontent} />
            <View style = {styles.containerBtn}>
                <View style = {styles.back_btn}>
                    <Back_Btn onPress = {()=>closeModal(false,'')}/>
                </View>
                <View style ={styles.check_btn}>
                    <Check_Btn onPress = {()=>closeModal(false,answercontent.trim())}/>
                </View>
            </View>
            <TouchableWithoutFeedback onPress = {dismisskeyboard}>
                <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
            </TouchableWithoutFeedback>   
        </View>
    
    );
}

const styles = StyleSheet.create({
    modal_container:{
        flex: 1,
        backgroundColor:'#FEF9EF'
    },
    question_container:{
        borderWidth: 4,
        borderColor: '#A2D2FF',
        width: '80%',
        alignSelf: 'center',
        height: '30%',
        backgroundColor: '#CDE7FF',
        borderRadius: 50,
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    question_text:{
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    anwser_input:{
        fontSize: 15,
        width: '80%',
        minHeight: '20%',
        maxHeight: '30%',
        marginTop: '10%',
        borderColor: '#E5E5E5',
        borderWidth: 3,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 20,
        padding: '5%',
    },
    containerBtn: {
        marginTop: '30%',
        flexDirection: 'row',
    },
    back_btn: {
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
export default Clue_Modal;