import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Background } from './components/Background'
import styles from './Login.style'
import { Logo } from './components/Logo'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ triggerLogin, result ] = useLoginMutation()
  const dispatch = useDispatch()


  const onSubmit = () => {
    // console.log( email, password )
    triggerLogin({ email, password })
    .unwrap()
    .then(result => {
      dispatch(setUser(result))
      insertSession({                 // Guardar en la base de datos local la sesion del usuario
        localId: result.localId,
        email: result.email,
        token: result.idToken,
      })
        .then(result => console.log(result)) 
        .catch(error => console.log(error.message))
    })
    .catch(error => console.log('Datos incorrectos',error.message))
  }


  return (
    <>
        <Background />

        <KeyboardAvoidingView style={{ flex: 1 }} >

        <View style={ styles.formContainer }>

            {/* Logo */}
            <Logo />

            <Text style={ styles.title } >Login</Text>

            <Text style={ styles.label } >Email:</Text>
                <TextInput 
                placeholder="Ingrese su email:"
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType="email-address"
                underlineColorAndroid="white"
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
                secureTextEntry={true}
                style={ styles.inputField}
                value= { password }
                onChangeText={ setPassword }              

                autoCapitalize='none'
                autoCorrect={false}
                />
            
            {/* Boton Login*/}
            <View style={ styles.buttonContainer }>
              <TouchableOpacity
                activeOpacity={0.5}
                style={ styles.button }
                onPress={ onSubmit }
              >
                <Text style= {styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>

            {/* Crear una nueva cuenta */}
            <View style={ styles.newUserContainer }>
              <TouchableOpacity
                activeOpacity={0.5}
                style={ styles.button }
                // onPress={ () => navigation.replace('RegisterScreen') }
                onPress={ () => navigation.navigate('Singup')}
              >
                <Text style= {styles.buttonText}>Nueva cuenta</Text>
              </TouchableOpacity>
            </View>        

        </View>

        </KeyboardAvoidingView>   

    </>
  )
}

export default Login