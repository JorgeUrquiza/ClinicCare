import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { Header } from '../../components';
import styles from './AddPaatient.style';
import { useAddPatientMutation } from '../../services/clinicApi';


const AddPatient = () => {

  const [addPatient] = useAddPatientMutation()

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPatient = async () => {
    try {   
      const newPatient = {
        name,
        age,
        category,
        sintoma,
        description,
        id: Math.floor(Math.random() * 1000),
      };
      await addPatient(newPatient);
      setName('');
      setAge('');
      setCategory('');
      setSintoma('');
      setDescription('');  

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
            onChangeText={ (text) => setName(text) }
            />

          <TextInput 
            placeholder="Edad"
            style={ styles.TextInput }
            keyboardType='numeric'
            onChangeText={ (text) => setAge(text) } 
            />

          <TextInput 
            placeholder="Categoria"
            style={ styles.TextInput }
            onChangeText={ (text) => setCategory(text) } 
            />

          <TextInput 
            placeholder="Sintoma"
            style={ styles.TextInput }
            onChangeText={ (text) => setSintoma(text) } 
            />

          <TextInput 
            placeholder="Descripcion"
            style={ styles.TextInput }
            onChangeText={ (text) => setDescription(text) } 
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
