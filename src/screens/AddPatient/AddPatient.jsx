import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { Header, PrimaryModal } from '../../components';
import styles from './AddPaatient.style';
import { useAddPatientMutation } from '../../services/clinicApi';

import Ionicons from '@expo/vector-icons/Ionicons';



const AddPatient = () => {

  const [addPatient, result] = useAddPatientMutation()

  const [modalVisible, setModalVisible] = useState(false)

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPatient = () => {
    const newPatient = {
      name,
      age,
      category,
      sintoma,
      description,
      id: Math.floor(Math.random() * 1000),
    };

    addPatient(newPatient)
      .then(result => {
        console.log(result)
        setModalVisible(true)
        setName('');
        setAge('');
        setCategory('');
        setSintoma('');
        setDescription('');  
      })
      .catch(error => console.log(error))
  }



  //fin de prueba
  return (
    <View style={ styles.container }>
      <Header title={'Agregar Paciente'} />

      <View style={ styles.formContainer }>
          <TextInput 
            placeholder="Nombre del Paciente"
            style={ styles.TextInput }
            onChangeText={ setName }
            />

          <TextInput 
            placeholder="Edad"
            style={ styles.TextInput }
            keyboardType='numeric'
            onChangeText={ setAge }
            />

          <TextInput 
            placeholder="Categoria"
            style={ styles.TextInput }
            onChangeText={ setCategory } 
            />

          <TextInput 
            placeholder="Sintoma"
            style={ styles.TextInput }
            onChangeText={ setSintoma } 
            />

          <TextInput 
            placeholder="Descripcion"
            style={ styles.TextInput }
            onChangeText={ setDescription } 
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
        
        <PrimaryModal 
            modalVisible={ modalVisible }
            onHandleClose={ () => setModalVisible(false) }
            title= {<Ionicons
            name="checkmark-circle"
            size={40}
            color= 'green'
          />}
            message='Paciente agregado correctamente'
          />  

    </View>
  )
}

export default AddPatient
