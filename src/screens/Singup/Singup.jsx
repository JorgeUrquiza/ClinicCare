import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import  styles from './Singup.style'
import { colors } from '../../constants/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSingUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice';


const Singup = ({navigation}) => {

  const [ name, setName ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ triggerSingup, result ] = useSingUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(name, lastname, email, password)
    triggerSingup({ email, password })
    console.log(result)
    if(result.isSuccess) {
      dispatch(setUser(result.data))
    }
    setName('');
    setLastname('');
    setEmail('');
    setPassword('');
  }


    return (
        <>    
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.secondary }}>

        <View style={ styles.formContainer } > 

          <Text style={ styles.title } >Registro</Text>

          <Text style={ styles.label } >Nombre:</Text>
            <TextInput 
              placeholder="Ingrese sus nombre:"
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid="white"
              selectionColor="white"
              style={ styles.inputField }
              value= { name }
              onChangeText={ setName}

              autoCapitalize='words'
              autoCorrect={false}
            />

          <Text style={ styles.label } >Apellido:</Text>
            <TextInput 
              placeholder="Ingrese su apellido:"
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid="white"
              selectionColor="white"
              style={ styles.inputField }
              value= { lastname }
              onChangeText={ setLastname }

              autoCapitalize='words'
              autoCorrect={false}
            />

          <Text style={ styles.label } >Email:</Text>
            <TextInput 
              placeholder="Ingrese su email:"
              placeholderTextColor="rgba(255,255,255,0.4)"
              keyboardType="email-address"
              underlineColorAndroid="white"
              selectionColor="white"
              style={ styles.inputField }
              value= { email }
              onChangeText={ setEmail }

              autoCapitalize='none'
              autoCorrect={false}
            />
          
          <Text style={ styles.label } >Contraseña</Text>
            <TextInput 
              placeholder="*********"
              placeholderTextColor="rgba(255,255,255,0.4)"
              underlineColorAndroid="white"
              selectionColor="white"
              secureTextEntry={true}
              style={ styles.inputField }
              value= { password }
              onChangeText={ setPassword }        

              autoCapitalize='none'
              autoCorrect={false}
            />

            {/* Boton Registro*/}
            <View style={ styles.buttonContainer }>
              <TouchableOpacity
                activeOpacity={0.8}
                style={ styles.button }
                onPress={ onSubmit }              

              >
                <Text style= { styles.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>

            {/* Boton Return*/}
            <TouchableOpacity
              activeOpacity={0.2}
              style={ styles.buttonReturn }
              onPress={ () => navigation.navigate('Login') }
            >
            
                <Ionicons 
                name='chevron-back-outline'
                size={ 30 }
                color={ colors.tertiary }
                />
                
            </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

        </>
    )
}

export default Singup