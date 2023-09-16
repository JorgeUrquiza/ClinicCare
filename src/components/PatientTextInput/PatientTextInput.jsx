import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './PatienTextInput.style';

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

