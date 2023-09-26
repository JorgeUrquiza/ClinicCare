import { TouchableOpacity, StyleSheet, TextInput, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { Header } from '../../components'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: colors.primary,
    },
    TextInput: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    Button: {
        backgroundColor: colors.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '50%', 
        height: 40
    },
    ButtonText: {
        color: 'white',
        fontSize: 20,
    }
})