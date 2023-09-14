import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import dataCategories from '../../data/dataCategories'
import CategoryItem from '../CategoryItem/CategoryItem'


const Categories = () => {
  return (
    <View style={ styles.container } >
         <FlatList
          data={dataCategories}
          keyExtractor={category => category}
          renderItem={({item}) => <CategoryItem category={item} /> }
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    }
})