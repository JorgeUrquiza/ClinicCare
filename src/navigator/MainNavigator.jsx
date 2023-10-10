import React, { useEffect, useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNAvigator';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/clinicApi';
import { setCamaraImage } from '../features/auth/authSlice';


// Validamos que navegacion presentamos al usuario

const MainNavigator = () => {

    const { user, localId } = useSelector(state => state.auth) 
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetProfileImageQuery( localId )

    useEffect(() => {
      console.log(data)
      if (data){
        dispatch(setCamaraImage(data.image))
      }    
    }, [data])
    
    

    return (
        user ? <BottomTabNavigator /> : <AuthStackNavigator />    
  )
}

export default MainNavigator;