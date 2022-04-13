import React, {useState} from 'react';
import { View, StyleSheet, TextInput,Text, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppButton from '../Components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../Components/AppScreen';
import AppTextInput from '../Components/AppTextInput'


function RegisterScreen({navigation}) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
                <View><Text style={{fontWeight: 'bold', fontSize:20, marginTop:100, width:150}}>Sign Up To Continue</Text></View>
                <View style={styles.textInputContainer}>  
                <Text style={styles.text}>Full Name</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Enter Full Name"
                        textContentType="emailAddress"
                        onChangeText = { userInputName => setUserName(userInputName)}
                        />   
                        <Text style={styles.text}>Email</Text>        
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Enter Your Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                        <Text style={styles.text}>Password</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Enter Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                </View> 
                <AppButton title="Register" onPress={(() => navigation.navigate('LoginScreen'))}/>
               <View style={{flexDirection: 'row'}}>
                <Text>Have an account? </Text>
                <Text style={{color:'#F76631'}}>Log in</Text>
                </View>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    textInputContainer:{
        marginVertical:50,

    },
    text:{
        fontSize:12,
    },
})

export default RegisterScreen;