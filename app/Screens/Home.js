import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import Mainbody from '../Components/screensComponents/HomescreenComponents/Mainbody';

import Memoriese from '../Components/screensComponents/HomescreenComponents/Memoriese';

import Topbar from '../Components/screensComponents/HomescreenComponents/Topbar';
import { useSelector } from 'react-redux';
import Store from '../Redux/store';

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

    const [Categoriesearray, setCategoriesearray] = useState(initialImagesCategoriese);

    const [selectedcategory, setselectedcategory] = useState('Birthday Party')
    const { memoriese } = useSelector(state => state.Reducer);
    console.log(memoriese);
    return (
        <View contentContainerStyle={{ flexGrow: 2, paddingBottom: 0, marginBottom: 0, marginTop:30 }} style={styles.container}>
            <Text>{memoriese[0].MemoryName}</Text>
            <Text>{memoriese[0].Location}</Text>
            <Image source={memoriese[0].image} />
            {/* {/* <Topbar navigation={navigation} />
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
                    
       <Mainbody selectedcategory={selectedcategory} memoriese={memoriese} navigation={navigation} />
                    <Memoriese /> */}

        </View>
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