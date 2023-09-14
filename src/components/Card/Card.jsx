import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',              
    }
})