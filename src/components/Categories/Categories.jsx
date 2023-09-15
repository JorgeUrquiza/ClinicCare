import React from 'react'
import { View, FlatList } from 'react-native'
import dataCategories from '../../data/dataCategories'
import CategoryItem from '../CategoryItem/CategoryItem'
import styles from './Categories.style'


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

