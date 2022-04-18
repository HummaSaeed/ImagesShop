import React, {useState} from 'react';
import { View, StyleSheet, TextInput,Text, Button, Alert, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch } from 'react-redux';
import AppButton from '../Components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../Components/AppScreen';
import AppTextInput from '../Components/AppTextInput'
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import { setUsername } from '../Redux/actions';
import { reset } from '../Redux/actions';

function RegisterScreen({navigation}) {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setflag] = useState(false);
    const [Login, setLogin] =useState(true);

    const handleSubmit =async() =>{
      //  window.localStorage.clear();
        if(!userName || !email || !password){
            setflag(true);
            {flag == true && (
             <Alert> Please Fill All Fields</Alert>)
         }
        } else{
            setflag(false);
            dispatch(reset(''))
             await AsyncStorage.setItem('@storage_Key1', userName);
             await AsyncStorage.setItem('@storage_Key2', email);
             await AsyncStorage.setItem('@storage_Key3', password);
             await AsyncStorage.setItem('@storage_Keylog1', userName);
             await AsyncStorage.setItem('@storage_Keylog2', email);
             await AsyncStorage.setItem('@storage_Keylog3', password);
 
            console.log("Saved in local storage");
          navigation.navigate('TabNavigator',{resett:'reset'})
        }
      
      
    }

    return (
        
        <AppScreen style={styles.container}>
         
                <SafeAreaView>
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
                        <TouchableWithoutFeedback>
                        <TouchableOpacity onPress={()=> handleSubmit()}>
                            <View style={[styles.button,]}>
                                <Text style={styles.textbutton}>
                                    Sign Up
                                </Text>
                            </View>
                        </TouchableOpacity>
                        </TouchableWithoutFeedback>
               <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Text>Have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{color:'#F76631'}}>Log in</Text>
                </TouchableOpacity>
                </View>
                
                </View> 
                </SafeAreaView>
             
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
    textbutton:{
        color: AppColors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: AppColors.primaryColor,
        borderRadius: 6,
        width: 300,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
    }, 
})

export default RegisterScreen;