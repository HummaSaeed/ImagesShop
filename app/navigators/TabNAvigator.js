import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../Screens/Home';
import Account from '../Screens/Account';
import Detail from '../Screens/Detail';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Screen5 from '../Screens/Screen5';
import { Icon, withBadge } from 'react-native-elements'

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigator() {

  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'white' }} 
activeColor="white" >
      <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Search" component={Detail}      // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Screen5" component={Screen5} 
 // Notification Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={26}/>

        ),
    }}/>
      <Tab.Screen name="Profile" component={Account}   // Profile Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home"  color={'black'} 
size={26}/>
        ),
    }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

