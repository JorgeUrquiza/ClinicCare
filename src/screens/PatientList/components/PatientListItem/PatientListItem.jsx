import React from 'react';
import { Pressable, Text } from 'react-native';
import { Card } from '../../../../components';
import styles from './PatientListItem.style'

const PatientListItem = ({item, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('PatientDetails', {patient: item})}>
      <Card style={styles.cardContainer} >
        <Text style={ styles.text } > {item.name} </Text>
      </Card>
    </Pressable>
  )
}

export default PatientListItem;

