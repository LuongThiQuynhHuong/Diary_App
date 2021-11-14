import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { FlatList, SectionList, StyleSheet, View } from 'react-native';
import Diary from '../Custom_component/Diary';
import Write_Btn from '../Custom_component/Write_btn';
import WritingModal from '../Custom_component/WritingModal';

const HomeScreen = () => {
    const [writing, setwriting] = useState(false);
    const [diaries, setdiaries] = useState([]);

    const handleOnSubmit = async (title, content) =>{
        const diary = {id: Date.now(), title, content};
        const updateDiaries = [...diaries, diary];
        setdiaries(updateDiaries);
        await AsyncStorage.setItem('diaries', JSON.stringify(updateDiaries));
    };


    const findDiary=async()=>{
        const result = await AsyncStorage.getItem('diaries');
        if(result !== null) setdiaries(JSON.parse(result));
    }

    useEffect(() => {
        //AsyncStorage.clear();
        findDiary();
    }, [])

    return (
    <>
        <View style={styles.container}>
            <FlatList data={diaries}
            keyExtractor={item =>item.id.toString()}
            renderItem ={({item}) => <Diary item = {item}/>}
            />
            
            <Write_Btn onPress={()=>setwriting(true)}/>

        </View>

        <WritingModal visible = {writing} 
        onSubmit = {handleOnSubmit}
        onClose = {()=>setwriting(false)}/>
    </>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FEF9EF',
        zIndex: 1
    }
})
