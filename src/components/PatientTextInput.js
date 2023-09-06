import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const PatientTextInput = ({ textValue, onHandleChangeItem, addItem }) => {
  return (
    <View style={ styles.inputContainer }>
        <TextInput 
        style={ styles.input }
        placeholder='Nombre del paciente'
        placeholderTextColor={ 'grey' }
        value={ textValue }
        onChangeText={ onHandleChangeItem }
        />
        <Button 
        title='ADD'
        onPress={ addItem }
        />
  </View>
  )
}

export default PatientTextInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
      },
      input: {
        width: 300,
        height: 40,
        marginHorizontal: 10,
        paddingLeft: 15,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 18
      },
})