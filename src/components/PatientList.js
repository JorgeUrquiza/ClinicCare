import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        marginTop: 15,
        // borderWidth: 1,
        borderColor: 'white',
      },
})