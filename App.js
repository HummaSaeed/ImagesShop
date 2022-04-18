import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from './app/navigators/home_navigator';
import Store, { persistor } from './app/Redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {persistor!=null ?console.log("data has persisted") :console.log("data has not persisted")}
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
