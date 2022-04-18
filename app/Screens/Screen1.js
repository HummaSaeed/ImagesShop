import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton';
import AppButtonSecondary from '../Components/AppButtonSecondary';
import AppColors from '../config/AppColors';
import image1 from '../../assets/M1.png';
import Dots from 'react-native-dots-pagination';
import Pagination from '../Components/Pagination';


function Screen1({navigation, route}) {
    return (
        <View style={styles.container}>
        <Image source={image1} style={{ width: 300, height: 214}} /> 
        <Text style={styles.text}>Has got some moments? </Text>
        <View><Text style={{width: 305, textAlign: 'center', color: '#667085'}}>Upload your moments on our app and we'll remind you of those moments</Text></View>
       
        <View style={{height:90,}} >
        <Pagination />
        <View style={{flexDirection:'row'}}>
       <AppButtonSecondary title="Skip" onPress={(() => navigation.navigate('RegisterScreen'))}/>
       <AppButton title="Continue" width="150" onPress={(() => navigation.navigate('Screen2'))}/>
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
        marginVertical:10,
    },
    text:{
        marginTop:100,
        fontWeight: 'bold',
    },
})
export default Screen1;