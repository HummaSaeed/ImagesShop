import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


function SocialMedia({name}) {
    return (
        <TouchableOpacity>
            <View style={styles.icons}>
            <Image source={name} margin={7} /> 
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    icons: {
        justifyContent:'flex-start',
        height:70,
        width:"100%",
        flexDirection:'row'
    }
    
})

export default SocialMedia;