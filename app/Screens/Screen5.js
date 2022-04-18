import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity, ScrollView , ImageBackground, SafeAreaView, } from 'react-native';
import { reset } from '../Redux/actions';
import SocialMedia from '../Components/Social_media';
import facebookmessenger from '../../assets/Facebook_Messenger.png';
import facebook from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';
import {removeMemory} from '../Redux/actions'
import snapchat from '../../assets/Snapchat.png';
import pinterest from '../../assets/Pinterest.png';
import telegram from '../../assets/Telegram.png';
import Details from '../Components/Details';
import { Icon, withBadge } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';

function Screen5({navigation, route}) {
    const {item} = route.params
    const { memoriese,name } = useSelector(state => state.Reducer);

    const dispatch = useDispatch()

    const deleteelement = () =>{
        try{ dispatch(removeMemory(item))}catch{console.log("item not deleted")};
         navigation.goBack()
       }
    return (
        <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems: 'center', justifyContent: 'center' }} style={styles.container}>
        <View style={{ width: 350, height: 460}}>
        <ImageBackground source={{uri:item.image}} resizeMode="cover" style={{flex: 1}}>
     <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 20,marginTop: '5%',height: 150}}>
     <TouchableOpacity style={styles.moveback} onPress={() => navigation.goBack()}>
                <Icon
                    name="left"
                    type="antdesign"
                    color={'black'}
                    size={15}

                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moveback} onPress={() => deleteelement()}>

            <Icon
                    name="delete"
                    type="antdesign"
                    color={'black'}
                    size={15}

                />
                            </TouchableOpacity>

     </View>
    </ImageBackground>
        </View>
        <Details item = {item}/>
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
       </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
       
        
    },
    Topbar: {
        height: '20%',
        width: '100%',
        marginTop: '5%',
        justifyContent: 'center',
        padding: '3%',

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