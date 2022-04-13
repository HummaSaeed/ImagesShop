import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppButton from '../Components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../Components/AppScreen'
import AppTextInput from '../Components/AppTextInput'
import AppText from '../Components/AppText'
import DataManager from '../config/DataManager';


const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4).max(8).label("Password"),
    }
);

const users = [
    {
        id: "user1",
        name:"Billie Eilish",
        email: "billie@gmail.com",
        password: "1234",
        image: require('../../assets/user1.jpeg')
    },
    {
        id: "user2",
        name:"Jon Snow",
        email: "js@gmail.com",
        password: "2345",
        image: require('../../assets/user2.jpeg'),
    },
];

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


    return (
        <AppScreen style={styles.container}>
                {/* <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="library" 
                        size={60}
                        color={AppColors.primaryColor}/>
                </View> */}
                 <View><Text style={{fontWeight: 'bold', fontSize:20, marginTop:100, width:150}}>Welcome Back to Login</Text></View>
                <Formik
                    initialValues={{email:'', password:'',}}
                    onSubmit = {(values, {resetForm})=> {
                            if(validateUser(values)){   
                                resetForm();
                                createUser(values);
                                navigation.navigate("Home", {
                                        screen: "Home",
                                        params:{
                                            screen:"Home",
                                            params:{ 
                                                paramEmail: values.email,
                                                paramName: getUser(values).name,
                                                paramImage: getUser(values).image,
                                            },
                                        }
                                    }
                                    );
                            }
                            else{
                                resetForm();
                                alert("Invalid Login Details")
                            }
                        }}
                    validationSchema={schema}
                    >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                    <>
                    <View style={styles.textInputContainer}>             
                    <AppTextInput
                        name="emailField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={values.email}
                        onBlur = {() => setFieldTouched("email")}
                        onChangeText = {handleChange("email")}
                        />
                    {touched.email && <AppText style={{color:"red", fontSize:16}}>{errors.email}</AppText>}
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        value={values.password}
                        onBlur = {() => setFieldTouched("password") }
                        onChangeText = {handleChange("password")}
                        />
                    {touched.password && <AppText style={{color:"red", fontSize:16}}>{errors.password}</AppText>}
                </View> 
                <AppButton title="Login" onPress={(() => navigation.navigate('Screen1'))}/>
                <View style={{flexDirection: 'row'}}>
                <Text>Don't have Account </Text>
                <Text style={{color:'#F76631'}}>Sign up</Text>
                </View>

                    </>
                )}
                 </Formik>
                
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        // backgroundColor:AppColors.otherColor,
        marginTop:0,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    textInputContainer:{
        marginVertical:50,

    }

})

export default LoginScreen;