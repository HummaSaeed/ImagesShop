import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

import rectangle1 from '../../icons/rectangle1.jpg'
import rectangle2 from '../../icons/rectangle2.jpg'
import { useSelector } from 'react-redux';
import img1 from '../../../../assets/img1.png'
import img2 from '../../../../assets/img2.png'
import img3 from '../../../../assets/img3.png'
import img4 from '../../../../assets/img4.png'
import img5 from '../../../../assets/img5.png'
import img6 from '../../../../assets/img6.png'
import img7 from '../../../../assets/img7.png'
import img8 from '../../../../assets/img8.png'

function Mainbody() {

    const { memoriese } = useSelector(state => state.Reducer)

    return (
        <View style={styles.mainbody}>
        <FlatList
                       data={memoriese}
                       numColumns={3}
                       showsHorizontalScrollIndicator={false}
                       keyExtractor={(item, index) => String(index)}              
                       renderItem={({ item }) => {
                         
                              
                               return (
                                   <Image source={{uri:item.image}} style={{marginLeft:12,marginTop: '2%',minHeight: 100, minWidth: 100}}  />
   
                               )
                         
                    
                       }}
                   />

   </View> 
    );
}

const styles = StyleSheet.create({
    mainbody: {
        width: '100%',
        height: '45%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',

    },
    mainbody_column: {

        height: '100%',
        width: '32%',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    img1: {
        width: '100%',
        height: '25%',
        borderRadius: 10,
        overflow: 'hidden'

    },
    img2: {
        width: '100%',
        height: '33%',
        borderRadius: 10,
        overflow: 'hidden'
    },



})
export default Mainbody;