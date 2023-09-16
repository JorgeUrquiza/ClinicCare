import React from 'react';
import { Pressable, Text } from 'react-native';
import { Card } from '../../../../components';
import styles from './PatientListItem.style'

const PatientListItem = ({item}) => {
  return (
    <Pressable onPress={() => console.log(`Paciente seleccionado: ${item}`)}>
      <Card style={styles.cardContainer} >
        <Text style={ styles.text } > {item} </Text>
      </Card>
    </Pressable>
  )
}

export default PatientListItem

