import React, { useEffect, useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNAvigator';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/clinicApi';
import { setCamaraImage, setUser } from '../features/auth/authSlice';
import { fetchSession } from '../db';


// Validamos que navegacion presentamos al usuario

const MainNavigator = () => {

    const { user, localId } = useSelector(state => state.auth) 
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetProfileImageQuery( localId )

    // Estado de la imagen de perfil
    useEffect(() => { 
      // console.log(data)
      if (data){
        dispatch(setCamaraImage(data.image))
      }    
    }, [data])
    
    // Mantener la sesion del usuario (falta un ; antes del parentesis de async)
    useEffect(() => { 
      (async () => {
        try {
          const session = await fetchSession();
          console.log('Esta es la session',session)
          if (session.rows.length) {
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
          console.log('Error obtener usuario', error.message)
        }
      })()
    }, [])
    
    

    return (
        user ? <BottomTabNavigator /> : <AuthStackNavigator />    
  )
}

export default MainNavigator;