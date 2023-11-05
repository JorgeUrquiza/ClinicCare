import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { Header } from '../../components';
import styles from './AddPaatient.style';
 // Probando
import { useAddPatientMutation } from '../../services/clinicApi';


const AddPatient = () => {

  const [addPatient] = useAddPatientMutation()

  //Probando
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [description, setDescription] = useState('');


  const handleAddPatient = async () => {
    try {
      const newPatient = {
        name,
        age: parseInt(age),
        category,
        sintoma,
        description,
      };
      await addPatient(newPatient);
      console.log('Paciente agregado correctamente');
    } catch (error) {
        console.error('Error al agregar paciente', error);
    }
};



  //fin de prueba
  return (
    <View style={ styles.container }>
      <Header title={'Agregar Paciente'} />

      <View style={ styles.formContainer }>
          <TextInput 
            placeholder="Nombre del Paciente"
            style={ styles.TextInput }
            onChangeText={ (text) => setName(text) } // Probando
            />

          <TextInput 
            placeholder="Edad"
            style={ styles.TextInput }
            keyboardType='numeric'
            onChangeText={ (text) => setAge(text) } // Probando
            />

          <TextInput 
            placeholder="Categoria"
            style={ styles.TextInput }
            onChangeText={ (text) => setCategory(text) } // Probando
            />

          <TextInput 
            placeholder="Sintoma"
            style={ styles.TextInput }
            onChangeText={ (text) => setSintoma(text) } // Probando
            />

          <TextInput 
            placeholder="Descripcion"
            style={ styles.TextInput }
            onChangeText={ (text) => setDescription(text) } // Probando
            />
        </View>

        <View style= { styles.ButtonContainer }>
            <TouchableOpacity 
                style={ styles.Button }  
                onPress={handleAddPatient}
                >
                <Text style={ styles.ButtonText } >Agregar</Text>
            </TouchableOpacity>
        </View>  

    </View>
  )
}

export default AddPatient
