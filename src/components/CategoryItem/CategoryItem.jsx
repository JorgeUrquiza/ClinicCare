import { Pressable, Text } from 'react-native'
import React from 'react'
import Card from '../Card/Card'
import styles from './CategoryItem.style'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={() => console.log(`esta es la categoria ${category}`)}>
      <Card style={styles.cardContainer} >
        <Text style={ styles.text } > {category} </Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

