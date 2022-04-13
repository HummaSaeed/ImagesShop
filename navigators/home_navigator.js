import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../app/Screens/Screen1';
import Screen2 from '../app/Screens/Screen2';
import Screen3 from '../app/Screens/Screen3';
import RegisterScreen from '../app/Screens/RegisterScreen';
import LoginScreen from '../app/Screens/LoginScreen';
const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator presentation="modal">
        <AppStack.Screen name="Home" component={Screen1}/>
        <AppStack.Screen name="Screen2" component={Screen2}/>
        <AppStack.Screen name="Screen3" component={Screen3}/>
        <AppStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <AppStack.Screen name="LoginScreen" component={LoginScreen}/>
        {/* <AppStack.Screen name="HomeScreen" component={HomeScreen}/> */}
 
    </AppStack.Navigator>
)

export default AuthNavigator;