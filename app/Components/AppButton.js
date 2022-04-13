import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import AppColors from '../config/AppColors'


function AppButton({title, width, color="primaryColor", onPress}) {
    return (
        <TouchableOpacity onPress={onPress} width={width}>
            <View style={[styles.button,{backgroundColor:AppColors[color]}]}>
                <Text style={styles.text}> {title}  </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.primaryColor,
        borderRadius: 6,
        width: 150,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        marginTop:20,
    },
    text:{
        color: AppColors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default AppButton;
