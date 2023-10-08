import React from 'react'
import { View, Image } from 'react-native';

export const Logo = () => {
  return (
    <View style={{
        alignItems: 'center'
    }} >
        <Image 
            source={ require('../../../assets/images/doctor.png') }
            style={{
                width: 150,
                height: 150,
            }}
        />
        
    </View>
  )
}
