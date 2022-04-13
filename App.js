import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';
import image1 from './assets/M1.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigator from './navigators/home_navigator';

export default function App() {
  return (
    <NavigationContainer>
    <AuthNavigator/>
</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    width: '50%',
    padding: 10,
    flexDirection: 'row',
  },
  text: { textAlign: 'center' },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15       
 }
});
