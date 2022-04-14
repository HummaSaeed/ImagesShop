import React from 'react';
import { StyleSheet, View,Text , Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppIcon from './AppIcon';
import location from '../../assets/location.png'
import calendar from '../../assets/calendar.png'

function Details({head,}) {
    return (
        <View style={{height:190, borderRadius:20,justifyContent:'flex-start',}}>
            <Text style={styles.head}>{head}</Text>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Image source={calendar} />

            <Text >24 March, 2022</Text>
            <Image  style={{marginLeft: 25}}source={location} />

            <Text style={{}}>Roberts Palace</Text>
            
            </View>
            <Text style={{marginTop:30, margin:5, color: "#475467"}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.
            </Text>
            </View>
      
    );
}
const styles = StyleSheet.create({
    head:{
        fontWeight:'bold',
        fontSize:26,
        justifyContent:'flex-start',
        
    }
    
})

export default Details;