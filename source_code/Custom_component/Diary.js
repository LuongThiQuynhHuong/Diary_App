import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Diary = ({item}) => {
    return (
        <View style = {styles.container}>
            <Text>{item.title}</Text>
        </View>
    )
}

export default Diary

const styles = StyleSheet.create({
    container:{

    }

});
