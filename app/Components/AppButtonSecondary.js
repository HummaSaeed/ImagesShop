import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import AppColors from '../config/AppColors'


function AppButtonSecondary({title, color="secondaryColor", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button,{backgroundColor:AppColors[color]}]}>
                <Text style={styles.text}> {title}  </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#F76631',
        width: 150,
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        marginTop:20,
    },
    text:{
        color: AppColors.primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default AppButtonSecondary;
