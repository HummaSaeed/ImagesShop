import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import Mainbody from '../Components/screensComponents/HomescreenComponents/Mainbody';

import Memoriese from '../Components/screensComponents/HomescreenComponents/Memoriese';

import Topbar from '../Components/screensComponents/HomescreenComponents/Topbar';


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


function Account() {

    const [Categoriesearray, setCategoriesearray] = useState(initialImagesCategoriese);

    const [selectedcategory, setselectedcategory] = useState('Birthday party')

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
        
            <Topbar />
            <View style={styles.Categoriese}>
                <FlatList
                    data={Categoriesearray}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={Categoriesearray => Categoriesearray.id.toString()}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.listitems}>
                                <TouchableOpacity onPress={() => setselectedcategory(item.text)}>

                                    <Text style={styles.listitemsText}>{item.text}</Text>
                                </TouchableOpacity>

                            </View>


                        )
                    }}
                />
            </View>
            <Mainbody />
            <Memoriese />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        padding: '3%',

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
export default Account;