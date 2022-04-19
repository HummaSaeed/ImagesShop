import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import Mainbody from '../Components/screensComponents/HomescreenComponents/Mainbody';

import Memoriese from '../Components/screensComponents/HomescreenComponents/Memoriese';

import Topbar from '../Components/screensComponents/HomescreenComponents/Topbar';
import { useSelector } from 'react-redux';
import Store from '../Redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialImagesCategoriese = [
    {
        id: 1,
        text: "Family Time",
    },
    {
        id: 2,
        text: "Birthday Party",
    },
    {
        id: 3,
        text: "Eid Event",
    },
    {
        id: 4,
        text: "Muree Tour",
    },
    {
        id: 5,
        text: "Weddding",
    },

]
const inittialstate = {
    //{ category: 'empty', productname: 'empty', price: 'empty', quantity: 'empty', discription: 'empty'}
    memoriese: [{

        image: null,
        email: '',
        phoneno: null,
        MemoryName: '',
        Date: '',
        Location: '',
        Description: '',

    },]
}


function HomeScreen({ route, navigation }) {
    useEffect(() => {
        // Update the document title using the browser API
        let nam = AsyncStorage.getItem('@storage_Key1');
//        alert(nam)
    });


    const [Categoriesearray, setCategoriesearray] = useState(initialImagesCategoriese);

    const [selectedcategory, setselectedcategory] = useState('Birthday Party')
    const { memoriese,name } = useSelector(state => state.Reducer);
   // console.log(memoriese);
    return (
        <SafeAreaView style={styles.container}>
        <View contentContainerStyle={{ flexGrow: 2, paddingBottom: 0, marginBottom: 0, marginTop:30 }} style={styles.container}>
    
        <Topbar navigation={navigation} name={name} />
        {memoriese.length >= 0 ?
            <View style={styles.Categoriese}>
      
                <FlatList
                    data={initialImagesCategoriese}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}              
                    renderItem={({ item }) => {
                        return (

                            <View style={{ ...styles.listitems, backgroundColor: selectedcategory == item.text ? '#F76631' : 'white' }}>
                                <TouchableOpacity 
                                onPress={() => setselectedcategory(item.text)}>

                                    <Text style={{ ...styles.listitemsText, color: selectedcategory == item.text ? 'white' : 'black' }}>{item.text}</Text>
                                </TouchableOpacity>

                            </View>

                        )
                    }}
                />
            </View>
            
                   :
                   null} 
                           {memoriese.length >0 ?

       <Mainbody selectedcategory={selectedcategory} memoriese={memoriese} navigation={navigation} />
       :
       null} 
       {memoriese.length >0 ?
         <Memoriese /> 
         :
                   null} 

        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        marginTop: 0,
        padding: '3%',
        backgroundColor: 'white',
        zIndex: 0

    },
    mainbody: {
        marginTop: '5%',
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        backgroundColor: 'white',
        borderColor: '#F76631',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5


    },
    listitemsText: {
        fontSize: 10,
        color: 'black',
        paddingHorizontal: 7.4
    },
    linksContainer: {
        marginVertical: 75,
        // backgroundColor:AppColors.otherColorLite,
        height: 150,
        justifyContent: "space-around",
        paddingLeft: 10,
    }
})
export default HomeScreen;