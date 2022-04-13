import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={22}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        borderRadius: 8, 
        borderWidth:2,
        borderColor:'#EAECF0',
        padding: 10,
        marginVertical: 5,
        width:'100%',
    },
    textInput:{
        fontSize:16,
        fontFamily: Platform.OS === 'android' ? "sans-serif" : "Avenir-Roman",
        color:'#000',
        marginLeft: 10,
        flex:1,
    },
})
export default AppTextInput;