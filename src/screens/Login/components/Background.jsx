import React from 'react'
import { View } from 'react-native';
import {colors} from '../../../constants/colors'

export const Background = () => {
  return (
    <View 
        style={{
            position: 'absolute',
            backgroundColor: colors.secondary,
            top: -270,
            width: 1000,
            height: 1200,
            transform: [
                { rotate: '-70deg' }
            ],
        }}
    />
  )
}
