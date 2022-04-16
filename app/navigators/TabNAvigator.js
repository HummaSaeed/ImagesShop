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
import Svg, { Circle, Path } from "react-native-svg";
import Form from '../Screens/Form';
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
    tabBarIcon: ({ focused })=> (
      <MaterialCommunityIcons name="home" color={focused ? '#F76631' : 'white'} size={26}/>
  ),

        }



        }

      />
      <Tab.Screen name="Detail" component={Detail}

        options={{
lazy: true,
          showLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="home" color={focused ? '#F76631' : 'white'} size={26}/>
        ),

        }
        }

      />
      <Tab.Screen name="plus" component={Form}

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
               <Icon name="plus" type="antdesign" size={25} color={'white'} />
{/*
  <Svg
            version="1.1"
            id="bottom-bar"
            x="0px"
            y="0px"
            width="100%"
            height="100"
            viewBox="0 0 1092 260"
            space="preserve"
          >
            <Path
              fill={"#373A50"}
              stroke={"#373A50"}
              d={`M30,60h${pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${pathY}.7,74.5,${pathA}.5,60,${pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
            />
            <Circle
              fill={"#7EE6D2"}
              stroke={"#7EE6D2"}
              cx="546"
              cy="100"
              r="100"
            />
          </Svg>
 */}
          </View>
            
      
          )

        }



        }


      />
      <Tab.Screen name="Screen5" component={Screen5} options={{
         showLabel: false,
         headerShown: false,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="home" color={focused ? '#F76631' : 'white'} size={26}/>
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
    tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name="home" color={focused ? '#F76631' : 'white'} size={26}/>
  ),

        }



        }


      />


    </Tab.Navigator>

  )
}





