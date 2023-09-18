import React from 'react';
import { Pressable, Text } from 'react-native';
import { Card } from '../../../../components';
import styles from './CategoryItem.style';

const CategoryItem = ({category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate('PatientList', {category}) }>
      <Card style={styles.cardContainer} >
        <Text style={ styles.text } > {category} </Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

