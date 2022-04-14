import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

import logo from '../../icons/logo.png'

import { Icon, withBadge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web';



function Topbar() {
    return (
        <View style={styles.Topbar}>
            <View style={styles.moveback}>
            <Icon
                            name="stepforward"
                            type="antdesign"
                            color={'black'}
                            size={22}

                        />
            </View>
            <View style={styles.Topbar_bottom}>
            <View style={styles.Topbar_left}>
                <View style={styles.logo}>
                <Image style={styles.Logo} source={logo} />

                </View>
                <View style={styles.text}>
                <Text>Robert Fox</Text>
                <Text>Joined 16 March 2021</Text>
                </View>
                
            </View>
            <View style={styles.Topbar_right}>
                <TouchableOpacity style={styles.Editbutton}>

                </TouchableOpacity>
            </View>
            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    Topbar: {
        height: '10%',
        width: '100%',
        marginTop: '5%',
        backgroundColor: 'pink'
    },
  
    Topbar_left: {
        width: '55%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'

    },
    Editbutton : {
backgroundColor: 'red',
width: '40%',
height: '20%'
    },
    Topbar_bottom : {
height: '80%',
width: '100%',
flexDirection: 'row'
    },
    moveback : {
        width: '100%',
        height: '20%',
        alignItems: 'flex-start'
    },
    logo :{
        height: '65%',
        width: '40.8%',
    },
    Topbar_right: {
        width: '45%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    Logo: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden'
    },

})
export default Topbar;