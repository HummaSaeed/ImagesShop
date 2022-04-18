import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import Mainbody from '../Components/screensComponents/AccountscreenComponents//Mainbody.js';

import Memoriese from '../Components/screensComponents/AccountscreenComponents/Memoriese.js';

import Topbar from '../Components/screensComponents/AccountscreenComponents/Topbar';





function LogoAccount({route,navigation}) {
const {name} = route.params

    return (
        <View style={styles.container}>
        
            <Topbar navigation={navigation} name={name} />
            <Mainbody />
            <Memoriese />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,

    },
    Categoriese: {
        width: '100%',
        height: '3%',
        marginTop: '5%'

    },
    listitems: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: '100%',
        backgroundColor: '#C4C4C4',
        borderColor: '#EAECF0',
        borderWidth: 1,
        marginRight: 5,
        width: 108,
        borderRadius: 5


    },
    listitemsText: {
        fontSize: 12,
        color: 'black',
    },
    linksContainer: {
        marginVertical: 75,
        // backgroundColor:AppColors.otherColorLite,
        height: 150,
        justifyContent: "space-around",
        paddingLeft: 10,
    }
})
export default LogoAccount;