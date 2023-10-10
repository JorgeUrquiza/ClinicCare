import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Profile.style'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCamaraImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/clinicApi';
import {Header} from '../../components/'

const Profile = () => {

    const image = useSelector(state => state.auth.imageCamara);
    const { localId } = useSelector(state => state.auth);
    const [ triggerSaveProfileImage, result ] = usePostProfileImageMutation();
    const dispatch = useDispatch();


    const verifyCamaraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    }

    const pickImage = async () => {
        const isCamaraOk = await verifyCamaraPermissions();
        
        if(isCamaraOk){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4,3],
                base64: true,
                quality: 0.4,
            });
            if (!result.canceled) {
                console.log(result.assets)
                dispatch(setCamaraImage(`data:image/jpg;base64,${result.assets[0].base64}`))
                
            }
        }
    }

    const confirmImage = () => {
        triggerSaveProfileImage({localId, image})
        console.log(result)
    }


    return (
        <View style={ styles.container } >

        <Header title={'Foto de perfil'} />

            {
                image
                    ? (<Image
                        source={{ uri: image }}
                        style={styles.image}
                        resizeMode='cover'
                    />)
                    : (<Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qEIHOHTw5IcrL5qoWsRBX20zBDshMPwkQSpNKaZ-3v4wb4W0-aGFohrc_Crzo-RCr6c&usqp=CAU' }}
                        style={styles.image}
                        resizeMode='cover'
                    />)
            }

            <Pressable
                style={styles.button}
                onPress={pickImage}
            >
                <Text style={ styles.buttonText } >Tomar foto de perfil</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={confirmImage}
            >
                <Text style={ styles.buttonText } >Confirmar</Text>
            </Pressable>
        </View>
    )
}

export default Profile