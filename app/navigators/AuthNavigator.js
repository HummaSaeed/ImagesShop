import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../app/Screens/Home'
const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator presentation="modal">
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Screen2" component={Screen2}/>
        <AppStack.Screen name="Screen3" component={Screen3}/>
        <AppStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <AppStack.Screen name="LoginScreen" component={LoginScreen}/>
 
    </AppStack.Navigator>
)

export default AuthNavigator;