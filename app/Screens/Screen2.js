import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import AppButton from '../Components/AppButton'
import AppColors from '../config/AppColors';
import image2 from '../../assets/M2.png';
import AppButtonSecondary from '../Components/AppButtonSecondary';
import Pagination from '../Components/Pagination';

function LoginScreen({navigation, route}) {
    return (
        <SafeAreaView style={styles.container}>
        <Image source={image2} style={{ width: 156, height: 214 }} /> 
        <Text style={styles.text}>Do You remember? </Text>
        <View><Text style={{width: 305, textAlign: 'center', color: '#667085'}}>When was the last time you enjoyed precious moments with your son? we remind you that for happiness</Text></View>
        <View style={{height:90,}} >
        <Pagination />
        <View style={{flexDirection:'row'}}>
       <AppButtonSecondary title="Skip" onPress={(() => navigation.navigate('RegisterScreen'))}/>
       <AppButton title="Continue" width="150" onPress={(() => navigation.navigate('Screen3'))}/>
       </View>
       </View>
       </SafeAreaView>
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