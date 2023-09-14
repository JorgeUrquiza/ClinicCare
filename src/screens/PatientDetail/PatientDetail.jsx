import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'

const PatientDetail = ({category}) => {
  return (
    <>
      <Header title={category} />

      <View style={ styles.container } >
        <Text>Patient Detail</Text>
      </View>
    </>
  )
}

export default PatientDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})