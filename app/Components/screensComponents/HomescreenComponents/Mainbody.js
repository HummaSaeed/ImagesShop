import React from 'react';
import { View, StyleSheet, Text,Image,FlatList, TouchableOpacity  } from 'react-native';

import rectangle1 from '../../icons/rectangle1.jpg'
import rectangle2 from '../../icons/rectangle2.jpg'

import { useSelector } from 'react-redux';



function Mainbody({selectedcategory,memoriese, navigation}) {
 //   const { memoriese } = useSelector(state => state.Reducer);

    return (

        <View style={styles.mainbody}>
         <FlatList
                        data={memoriese}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={memoriese => memoriese.Date}
                        renderItem={({ item }) => {
                                if(item.MemoryName == selectedcategory)
                                {
                                    console.log(item.MemoryName)
                                    return (
                                        <View style={{marginTop: 10,marginLeft: 12,maxHeight: 150, maxWidth: 150}}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Screen5', {
                                            item : item
                                          })} >
                                        <Image 
                                        source={{uri:item.image}} style={{minHeight: 150, minWidth: 150}}  />
                                        </TouchableOpacity>
                                        </View>
                                    )
                                }
                                else{
                                    return null
                                }
                            }
                          
                     
                        }
                    />

    </View>  
    );
}

const styles = StyleSheet.create({
    mainbody: {
        marginTop: '5%',
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainbody_column: {

        height: '100%',
        width: '49%',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    rectangel1: {
        width: '100%',
        height: '41.5%',
        borderRadius: 10,
        overflow: 'hidden'
   
    },
    rectangel2: {
        width: '100%',
        height: '57.5%',
        borderRadius: 10,
        overflow: 'hidden'
       
    },
   

 
})
export default Mainbody;