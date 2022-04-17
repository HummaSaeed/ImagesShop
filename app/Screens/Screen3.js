import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton'
import AppColors from '../config/AppColors';
import image3 from '../../assets/M3.png';
import AppButtonSecondary from '../Components/AppButtonSecondary';
import Pagination from '../Components/Pagination';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Screen3({navigation, route}) {
    const handleSubmit =async() =>{
        const username =await AsyncStorage.getItem('@storage_Key1');
        const email =await AsyncStorage.getItem('@storage_Keylog1');
        const pass =await AsyncStorage.getItem('@storage_Keylog2');
        {{ email ==null || pass ==null ? navigation.navigate('RegisterScreen'): navigation.navigate('LoginScreen')}}
    }
    return (
        <View style={styles.container}>
        <Image source={image3} style={{ width: 298, height: 214 }} /> 
        <Text style={styles.text}>Relive the best moments</Text>
        <View><Text style={{width: 305, textAlign: 'center', color: '#667085',marginTop:10,}}>We help you Bring back your happiest memories from the past</Text></View>
        <View style={{height:90,}} >
        <Pagination />
        <View style={{flexDirection:'row'}}>
       <AppButtonSecondary title="Skip" onPress={(() => navigation.navigate('RegisterScreen'))}/>
       <AppButton title="Continue" width="150" onPress={() =>handleSubmit()}/>
       </View>
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