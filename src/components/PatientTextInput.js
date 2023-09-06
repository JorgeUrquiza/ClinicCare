import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
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
        
        <TouchableOpacity
          onPress={ addItem }
          style={ styles.buttonAdd }
        >
          <Text style={ styles.buttonText }>Agregar</Text>
        </TouchableOpacity>
  </View>
  )
}

export default PatientTextInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
      },
      input: {
        width: '70%',
        height: 40,
        marginHorizontal: 10,
        paddingLeft: 15,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 18
      },
      buttonAdd: {
        backgroundColor: '#E58824',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 8,
      },
      buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
      }
})