import React, {useState} from 'react';
import { View, StyleSheet, Text,Image, FlatList } from 'react-native';

import miniimage from '../../icons/miniimage.jpeg'
import left from '../../icons/left.png'
import mainimage from '../../icons/mainimage.jpg'

const initialmemoriesewithfriends = [
    {
        id: 1,
        image: miniimage
    },
    {
        id: 2,
        image: miniimage
    },
    {
        id: 3,
        image: miniimage
    },
    {
        id: 4,
        image: miniimage
    },
    {
        id: 5,
        image: miniimage
    },
    {
        id: 7,
        image: miniimage
    },
    {
        id: 8,
        image: miniimage
    },
    {
        id: 9,
        image: miniimage
    },

]



function Memoriese() {
    
    const [memoriesearray, setmemoriesearray] = useState(initialmemoriesewithfriends);

    return (
        <View style={styles.findmemoriese}>
                <View style={styles.findmemoriese_top}>
                    <View style={styles.findmemoriese_top_left}>
                        <Text>Find Memoriese With Friends</Text>
                    </View>
                    <View style={styles.findmemoriese_top_right}>
                        <Text>see all</Text>
                        <Image source={left} />
                    </View>
                </View>
                <View style={styles.findmemoriese_flatlist}>
                    <FlatList
                        data={memoriesearray}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={Categoriesearray => Categoriesearray.id.toString()}
                        renderItem={({ item }) => {
                            return (

                                <Image source={item.image} style={styles.memoriese_mini_image} />


                            )
                        }}
                    />
                </View>
                <View style={styles.findmemoriese_image}>
                <Image source={mainimage} style={styles.memoriese_image} />

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
 
    findmemoriese: {
        width: '100%',
        height: 900,
        marginTop: '3%'
    },
    findmemoriese_top: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    findmemoriese_top_left: {
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    findmemoriese_top_right: {
        width: '60%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    findmemoriese_flatlist: {
        width: '100%',
        height: '8%',


    },
    memoriese_mini_image: {
        width: 60,
        height: 60,
        marginRight: 9.4
    },
    findmemoriese_image: {
        width: '100%',
        height: 250,
    },
    memoriese_image: {
        height: '100%',
        width: '100%',
     
    },
})
export default Memoriese;