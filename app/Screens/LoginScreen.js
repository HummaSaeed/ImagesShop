import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Memories1 from '../../assets/Memories1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';



import AppButton from '../Components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../Components/AppScreen'
import AppTextInput from '../Components/AppTextInput'
import AppText from '../Components/AppText'
import DataManager from '../config/DataManager';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './Home'


const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4).max(8).label("Password"),
    }
);

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
};

const getUser = ({email}) => {
    return users.find((user) => user.email === email );
}

const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
}

function LoginScreen({navigation}) {
    const [logemail, setlogEmail] = useState();
    const [logpassword, setlogPassword] = useState();
    const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

    const handleLogin = async() => {
        
        let mail = await AsyncStorage.getItem('@storage_Key');
        let pass = await AsyncStorage.getItem('@storage_Key');
        console.log(mail);
        console.log(pass);
    
        if (!logemail || !logpassword) {
          setFlag(true);
          console.log("EMPTY");
        } else if (logpassword !== pass || logemail !== mail) {
          setFlag(true);
          console.log("login password is not equal")
        } else {
          setHome(!home);
          setFlag(false);
          console.log("verified");
        }
      }

    return (
        <AppScreen style={styles.container}>
            {home ? ( <View>
                 <View style={{backgroundColor:'#42C2FF33', width: 450, height: 319,  justifyContent: 'center'}}>
                    <Image source={Memories1} style={{ width: 250, height: 242, marginLeft: 50, marginTop:10}}/>
                </View>
                 <View style={{marginLeft:20}}><Text style={{fontWeight: 'bold', fontSize:20, marginTop:30, width:150}}>Welcome Back to Login</Text></View>
                
                {
                    <>
                    <View style={styles.textInputContainer}>   
                    <Text>Username</Text>          
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Enter Your Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setlogEmail(userInputEmail)}
                        />
                    {/* {touched.email && <AppText style={{color:"red", fontSize:16}}>{errors.email}</AppText>} */}
                    <Text>Password</Text>
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Enter Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setlogPassword(userInputPassword)}
                        />
                    {/* {touched.password && <AppText style={{color:"red", fontSize:16}}>{errors.password}</AppText>} */}
                    <TouchableOpacity onPress={(() => handleLogin())}>
                            <View style={[styles.button,]}>
                                <Text style={styles.textbutton}>
                                    Log In
                                </Text>
                            </View>
                        </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Text>Don't have Account </Text>
                <Text style={{color:'#F76631'}}>Sign up</Text>
                </View>
                </View> 
                

                    </>
                }
                
                 </View>):<Home />}
        </AppScreen>  
    );
}

const styles = StyleSheet.create({
    container:{
        // padding:20,
        // backgroundColor:AppColors.otherColor,
        marginTop:0,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    textInputContainer:{
        marginVertical:10,
        marginLeft:20

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

export default LoginScreen;