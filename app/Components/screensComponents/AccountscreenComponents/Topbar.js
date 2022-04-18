import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import logo from '../../../../assets/logo.jpeg'
import { useSelector } from 'react-redux';
import { Icon, withBadge } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';


function Topbar({navigation}) {
    const { memoriese,name } = useSelector(state => state.Reducer);

    return (
        <SafeAreaView style={styles.Topbar}>
            <TouchableOpacity style={styles.moveback} onPress={() => navigation.goBack()}>
                <Icon
                    name="left"
                    type="antdesign"
                    color={'black'}
                    size={15}

                />
            </TouchableOpacity>
            <View style={styles.Topbar_bottom}>
                <View style={styles.Topbar_left}>
                    <View style={styles.Logo}>
                        <Image style={styles.Logo} source={logo} />

                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}>{name.name}</Text>
                        <Text>Joined 16 March 2021</Text>
                    </View>

                </View>
                <View style={styles.Topbar_right}>
                    <TouchableOpacity style={styles.Editbutton} onPress={(() => navigation.navigate('Form'))}>
                        <Text style={{color: 'white'}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Topbar: {
        height: '20%',
        width: '100%',
        marginTop: '10%',
        justifyContent: 'center',
        padding: '3%',

    },

    Topbar_left: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',

    },
    Editbutton: {
        backgroundColor: 'red',
        width: '40%',
        height: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Topbar_bottom: {
        marginTop: '5%',
        height: '80%',
        width: '100%',
        flexDirection: 'row',

    },
    text: {
        marginLeft: '-18%'
    },
    moveback: {
        width: '7%',
        height: '23%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: 'black'

    },
    logo: {
        height: '100%',
        width: '100%',
    },
    Topbar_right: {
        width: '45%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    Logo: {
        height: '85%',
        width: '60%',
        borderRadius: 30,
        overflow: 'hidden'

    },

})
export default Topbar;