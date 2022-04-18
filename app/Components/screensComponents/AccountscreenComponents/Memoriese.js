import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList ,TouchableOpacity} from 'react-native';
import { Icon, withBadge } from 'react-native-elements'

import mail from '../../../../assets/mail.png'
import contact from '../../../../assets/contact.png'
import settings from '../../../../assets/settings.png'
import { useSelector } from 'react-redux';
import Store from '../../../Store';
import RegisterScreen from '../../../Screens/RegisterScreen'

function Memoriese() {

  const [logout, setlogout] = useState(true)
    const handleSubmit = async () => {
        try {
            await AsyncStorage.removeItem('@storage_Key2');
            
        } catch {
            console.log("not logout")
        }
    }
    return (
        <View style={styles.container}>
            {logout ? <View>
            <View style={styles.containerTop}>
                <View style={styles.containeritems}>
                    <Image source={mail} />

                    <Text style={{ color: 'white', marginLeft: '3%' }}>humma786</Text>

                </View>
                <View style={styles.containeritems}>
                    <Image source={contact} />
                    <Text style={{ color: 'white', marginLeft: '3%' }}>64373</Text>
                </View>

            </View>
            <View style={styles.containerBottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <View style={styles.containeritems}>

                        <Image source={settings} />
                        <Text style={{ color: 'white', marginLeft: '10%' }}>Settings</Text>
                    </View>
                    <Icon
                        name="right"
                        type="antdesign"
                        color={'white'}
                        size={15}

                    />
                </View>
                <TouchableOpacity style={styles.logoutbutton} onPress={() =>{handleSubmit() }}>
                    <Text style={{ color: 'white' }}>Logout</Text>
                </TouchableOpacity>
            </View></View> :
            <RegisterScreen />}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        marginTop: '2%',
        height: 230,
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 10
    },
    containerTop: {
        width: '100%',
        height: '45%',
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey'
    }
    ,
    containeritems: {
        flexDirection: 'row',
        marginLeft: '4%',
        marginTop: '2%',
        alignItems: 'center'
    },
    containerBottom: {
        width: '100%',
        height: '55%',
    },
    logoutbutton: {
        backgroundColor: 'red',
        width: '30%',
        height: '25%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginLeft: '6%'
    },

})
export default Memoriese;