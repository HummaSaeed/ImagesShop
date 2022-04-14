import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity, ScrollView  } from 'react-native';
import AppButton from '../Components/AppButton'
import AppColors from '../config/AppColors';
import DataImage from '../../assets/data_image.png'
import AppButtonSecondary from '../Components/AppButtonSecondary';
import AppIcon from '../Components/AppIcon';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import SocialMedia from '../Components/Social_media';
import facebookmessenger from '../../assets/Facebook_Messenger.png';
import facebook from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';
import snapchat from '../../assets/Snapchat.png';
import pinterest from '../../assets/Pinterest.png';
import telegram from '../../assets/Telegram.png';
import Details from '../Components/Details';



function Screen5({navigation, route}) {
    return (
        
        <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems: 'center', justifyContent: 'center' }} style={styles.container}>
        <Image source={DataImage} style={{ width: 350, height: 460 }} /> 
        <Details head="Eleanor Blowing Baloons at Party"/>
        <View style={{backgroundColor:'black', height:130, width:'100%',padding:5, borderTopRightRadius: 20,borderTopLeftRadius:20}}>
        <Text style={{color:'white', fontWeight: 'bold', margin:10}}>Share With: </Text>
        <View style={styles.iconView}>
          
        <SocialMedia name={facebook} />
        <SocialMedia name={facebookmessenger} />
        <SocialMedia name={twitter} />
        <SocialMedia name={snapchat} />
        <SocialMedia name={pinterest} />
        <SocialMedia name={telegram} />
        </View>
        </View>
       </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
       
        
    },
    text:{
        marginTop:100,
        fontWeight: 'bold',
    },
    iconView:{
        marginBottom:0,
        flexDirection:'row',
        
        

    }
})
export default Screen5;