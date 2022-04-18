import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import logo from '../../../../assets/logo.jpeg'

function Topbar({navigation}) {
    const { name } = useSelector(state => state.Reducer);

    return (
        <SafeAreaView style={styles.Topbar}>
            <View style={styles.Topbar_left}>
                <Text>{name.name}</Text>
                <Text style={{ fontWeight: 'bold' }}>Relive your best moments</Text>
            </View>
            <TouchableOpacity style={styles.Topbar_right} onPress={() =>navigation.navigate('LogoAccount',{name:name})}>
                <Image style={styles.Logo} source={logo} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Topbar: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        marginTop: '5%',
    },

    Topbar_left: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',

    },
    Topbar_right: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    Logo: {
        height: '100%',
        width: '36.8%',
        borderRadius: 30,
        overflow: 'hidden'
    },

})
export default Topbar;