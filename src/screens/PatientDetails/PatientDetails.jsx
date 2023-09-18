import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './PatientDetails.style'

const PatientDetails = ({patient}) => {
  return (
    <View style={styles.container} >

        <Header title={'Detalles'} />
        <Text style={styles.title} >{ patient.name}</Text>       
        <Text style={styles.description}>{patient.age}</Text>
        <Text style={styles.description}>{patient.sintoma}</Text>

    </View>
  )
}

export default PatientDetails