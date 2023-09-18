import React from 'react';
import { Pressable, Text } from 'react-native';
import { Card } from '../../../../components';
import styles from './PatientListItem.style'

const PatientListItem = ({item, setPatientSelected}) => {
  return (
    <Pressable onPress={() => setPatientSelected(item)}>
      <Card style={styles.cardContainer} >
        <Text style={ styles.text } > {item.name} </Text>
      </Card>
    </Pressable>
  )
}

export default PatientListItem

