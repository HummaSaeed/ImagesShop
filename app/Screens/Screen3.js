import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton'
import AppColors from '../config/AppColors';
import image3 from '../../assets/M3.png';
import AppButtonSecondary from '../Components/AppButtonSecondary';


function Screen3({navigation, route}) {
    return (
        <View style={styles.container}>
        <Image source={image3} style={{ width: 298, height: 214 }} /> 
        <Text style={styles.text}>Relive the best moments</Text>
        <View><Text style={{width: 305, textAlign: 'center', color: '#667085',marginTop:10,}}>We help you Bring back your happiest memories from the past</Text></View>
        
        <View style={{flexDirection:'row'}}>
       <AppButtonSecondary title="Skip"/>
       <AppButton title="Continue" onPress={(() => navigation.navigate('RegisterScreen'))}/>
       </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   text:{
       marginTop:100,
       fontWeight: 'bold',
   }
})
export default Screen3;