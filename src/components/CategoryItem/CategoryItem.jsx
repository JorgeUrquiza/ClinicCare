import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from '../Card/Card'

const CategoryItem = ({ category }) => {
  return (
    <Pressable>
      <Card style={styles.cardContainer} >
        <Text> {category} </Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})