import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button, Image, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../Components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../Components/AppScreen';
import AppTextInput from '../Components/AppTextInput'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, withBadge } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addMemory } from './../Store';
import shortid from 'shortid';
import { useSelector } from 'react-redux';


function Form({ navigation }) {

    const dispatch = useDispatch();
    const [MemoryName, setMemoryName] = useState();
    const [Date, setDate] = useState();
    const [Location, setLocation] = useState();
    const [Description, setDescription] = useState();
    const [image, setImage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    const handleSubmit = () => {

        const new_Memory = {
            //  id:shortid.generate(),
            MemoryName: MemoryName,
            Date: Date,
            Location: Location,
            Description: Description,
            image: image
        }

       dispatch(addMemory(new_Memory));
       navigation.navigate('Home');
        console.log(dispatch(addMemory(new_Memory)));
    }

    return (
        <AppScreen style={styles.container}>
            <View style={styles.Topbar}>
                <TouchableOpacity style={styles.moveback} onPress={() => navigation.goBack()}>
                    <Icon
                        name="left"
                        type="antdesign"
                        color={'black'}
                        size={15}
                    />
                </TouchableOpacity>
            </View>
            <View><Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20, justifyContent: 'center', marginLeft: 70, width: 150 }}>Add A Memory</Text></View>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
                   {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}*/}
            <View style={styles.textInputContainer}>

                <Text style={styles.text}>Memory Name</Text>
                {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}

                {/* </View> */}
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Memory Name"
                    textContentType="emailAddress"
                    onChangeText={userInputMemoryName => setMemoryName(userInputMemoryName)}
                />
                <Text style={styles.text}>Date</Text>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Date"
                    textContentType="emailAddress"
                    onChangeText={userDate => setDate(userDate)}
                />
                <Text style={styles.text}>Location</Text>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Location"
                    textContentType="emailAddress"
                    onChangeText={userInputLocation => setLocation(userInputLocation)}
                />
                <Text style={styles.text}>Description</Text>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Description"
                    textContentType="emailAddress"
                    onChangeText={userInputDescription => setDescription(userInputDescription)}
                />
                <TouchableOpacity onPress={()=>handleSubmit()}>
                    <View style={[styles.button,]}>
                        <Text style={styles.textbutton}>
                            Add Memory
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    Topbar: {
        width: '100%',
        justifyContent: 'center',
        padding: '3%',

    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    textInputContainer: {
        marginVertical: 50,

    },
    text: {
        fontSize: 12,
    },
    textbutton: {
        color: AppColors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: AppColors.primaryColor,
        borderRadius: 6,
        width: 300,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
})

export default Form;