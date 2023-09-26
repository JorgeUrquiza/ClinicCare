import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import React from 'react';
import { Header } from '../../components';
import styles from './AddPaatient.style';


const AddPatient = () => {

  return (
    <View style={ styles.container }>
      <Header title={'Agregar Paciente'} />

      <TextInput 
        placeholder="Nombre del Paciente"
        style={ styles.TextInput }
      />

      <TextInput 
        placeholder="Edad"
        style={ styles.TextInput }
        keyboardType='numeric'
      />

      <TextInput 
        placeholder="Categoria"
        style={ styles.TextInput }
      />

      <TextInput 
        placeholder="Sintoma"
        style={ styles.TextInput }
      />

      <TextInput 
        placeholder="Descripcion"
        style={ styles.TextInput }
      />

        <View style= { styles.ButtonContainer }>
            <TouchableOpacity 
                style={ styles.Button }  
                onPress={ () => console.log('Agregar Paciente')}
                >
                <Text style={ styles.ButtonText } >Agregar</Text>
            </TouchableOpacity>
        </View>  

    </View>
  )
}

export default AddPatient
