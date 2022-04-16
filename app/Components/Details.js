import React from 'react';
import { StyleSheet, View,Text , Image} from 'react-native';

import location from '../../assets/location.png'
import calendar from '../../assets/calendar.png'

function Details({item}) {
    return (
        <View style={{height:190, borderRadius:20,justifyContent:'flex-start',}}>
            <Text style={styles.head}>{item.MemoryName}</Text>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Image source={calendar} />

            <Text >{item.Date}</Text>
            <Image  style={{marginLeft: 25}} source={location} />

            <Text style={{}}>{item.Location}</Text>
            
            </View>
            <Text style={{marginTop:30, margin:5, color: "#475467"}}>
{item.Description}
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