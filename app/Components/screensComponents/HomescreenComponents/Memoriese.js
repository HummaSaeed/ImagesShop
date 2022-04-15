import React, {useState} from 'react';
import { View, StyleSheet, Text,Image, FlatList } from 'react-native';

import miniimage from '../../icons/miniimage.jpeg'
import mainimage from '../../icons/mainimage.jpg'
import right from '../../../../assets/right.png';
import { useSelector } from 'react-redux';
import Store from '../../../Store';


function Memoriese() {
    const newmemoriesearray = useSelector(state => state); 
    // const [memoriesearray, setmemoriesearray] = useState(initialmemoriesewithfriends);

    return (
        <View style={styles.findmemoriese}>
                <View style={styles.findmemoriese_top}>
                    <View style={styles.findmemoriese_top_left}>
                        <Text style={{fontWeight: 'bold'}}>Find Memoriese With Friends</Text>
                    </View>
                    <View style={styles.findmemoriese_top_right}>
                        <Text style={{color: '#F76631'}}>see all</Text>
                        <Image source={right} />
                    </View>
                </View>
                <View style={styles.findmemoriese_flatlist}>
                
                    <FlatList
                        data={newmemoriesearray}
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
        marginTop: '2%'


    },
    memoriese_mini_image: {
        width: 60,
        height: 60,
        marginRight: 9.4,
        borderRadius: 10,
        overflow: 'hidden'
    },
    findmemoriese_image: {
        width: '100%',
        height: 250,
    },
    memoriese_image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden'
     
    },
})
export default Memoriese;