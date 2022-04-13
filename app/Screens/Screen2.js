import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton'
import AppColors from '../config/AppColors';
import image2 from '../../assets/M2.png';
import AppButtonSecondary from '../Components/AppButtonSecondary';


function LoginScreen({navigation, route}) {
    return (
        <View style={styles.container}>
        <Image source={image2} style={{ width: 156, height: 214 }} /> 
        <Text style={styles.text}>Do You remember? </Text>
        <View><Text style={{width: 305, textAlign: 'center', color: '#667085'}}>When was the last time you enjoyed precious moments with your son? we remind you that for happiness</Text></View>
        
        <View style={{flexDirection:'row'}}>
       <AppButtonSecondary title="Skip"/>
       <AppButton title="Continue" onPress={(() => navigation.navigate('Screen3'))}/>
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
export default LoginScreen;