import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../Screens/Home';
import Account from '../Screens/Account';
import Detail from '../Screens/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Screen5 from '../Screens/Screen5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {

  return (

    <Tab.Navigator
  
  
      backBehavior={"history"}
      unmountOnBlur = {true}
      screenOptions={
        {
          tabBarStyle: {
            backgroundColor: '#171C26'
            
          },
          lazy : true,
         tabBarShowLabel: false,
          style: { height: 10, elevation: 5 }

        }
      }


    >
      <Tab.Screen name="HomeScreen" component={HomeScreen}
unmountOnBlur={true}
     
    //  listeners={({navigation}) => ({blur: () => navigation.setParams({screen: undefined})})}
     //     listeners={{ blur: () => BackHandler.removeEventListener('hardwareBackPress',handleBackButton)
//}} 
        options={{
          lazy: true,
          showLabel: false,
          headerShown: false,
       //tabBarStyle:{display: 'flex'},
    //    focused : alert('hy'),
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={'black'} size={26}/>
  ),

        }



        }

      />
      <Tab.Screen name="Detail" component={Detail}






        options={{
lazy: true,
          showLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={26}/>
        ),

        }



        }

      />
      <Tab.Screen name="plus" component={HomeScreen}




        options={{
          showLabel: false,
          headerShown: false,
          tabBarStyle:{display: 'none'},
      
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              position: 'absolute',
              bottom: 20, 
              height: 58,
              width: 58,
              borderRadius: 58,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
               <Icon name="plus" type="antdesign" size={25} color={'black'} />

          </View>
            
      
          )

        }



        }


      />
      <Tab.Screen name="Screen5" component={Screen5} options={{
         showLabel: false,
         headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'black'} size={26}/>
      ),

      }



      } />
      <Tab.Screen name="Account" component={Account}
      
 /*   listeners={{ focus: () => BackHandler.addEventListener('hardwareBackPress',handleBackButton1)
   ,blur: () => BackHandler.removeEventListener('hardwareBackPress',handleBackButton1)
}} */
        options={{
    //      backBehavior: 'none',
    showLabel: false,
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={'black'} size={26}/>
  ),

        }



        }


      />


    </Tab.Navigator>

  )
}





