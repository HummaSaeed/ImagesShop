import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';

import rectangle1 from '../../icons/rectangle1.jpg'
import rectangle2 from '../../icons/rectangle2.jpg'



function Mainbody() {
    return (
        <View style={styles.mainbody}>
        <View style={styles.mainbody_column}>
            <Image style={styles.rectangel1} source={rectangle1} />
            <Image style={styles.rectangel2} source={rectangle2} />

        </View>
        <View style={styles.mainbody_column}>
            <Image style={styles.rectangel2} source={rectangle2} />

            <Image style={styles.rectangel1} source={rectangle1} />

        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    mainbody: {
        marginTop: '5%',
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainbody_column: {

        height: '100%',
        width: '49%',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    rectangel1: {
        width: '100%',
        height: '41.5%',
        borderRadius: 30,
        overflow: 'hidden'
   
    },
    rectangel2: {
        width: '100%',
        height: '57.5%',
       
    },
   

 
})
export default Mainbody;