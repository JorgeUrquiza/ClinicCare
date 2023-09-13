import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './PatienList.style'

const PatientList = ({ itemsList, renderListItem  }) => {
  return (
    <View style={ styles.listContainer } >
        <FlatList 
          data={ itemsList }
          renderItem={ renderListItem }
          keyExtractor={ item => item.id }
        />        
    </View>
  )
}

export default PatientList

