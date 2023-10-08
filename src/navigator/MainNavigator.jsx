import React, { useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNAvigator';
import { useSelector } from 'react-redux';


// Validamos que navegacion presentamos al usuario

const MainNavigator = () => {

    // const [ user, setUser ] = useState(null)
    const user = useSelector(store => store.auth.user)
    

    return (
        user ? <BottomTabNavigator /> : <AuthStackNavigator />    
  )
}

export default MainNavigator;