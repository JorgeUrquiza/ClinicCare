import React, { useState } from 'react';
import { TouchableOpacity, TextInput, View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header, PrimaryModal } from '../../components';
import styles from './AddPaatient.style';
import { useAddPatientMutation } from '../../services/clinicApi';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list'


const AddPatient = () => {

  const [addPatient, result] = useAddPatientMutation()

  const [modalVisible, setModalVisible] = useState(false)

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [description, setDescription] = useState('');

  const data = [
    {value:'Clinico'},
    {value:'Traumatología'},
    {value:'Pediatría'},
    {value:'Cardiología'},
    {value:'Oftalmología'},
    {value:'Dermatología'},
    {value:'Psicología'},
    {value:'Urología'},
]

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

  return (
    <KeyboardAvoidingView     //para que el teclado no tape el input
      style={styles.container}
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <ScrollView>        
        <View style={{ paddingTop: 40, }}>
          <Header title={'Agregar Paciente'} />

          <View style={ styles.formContainer }>
              <TextInput 
                placeholder="Nombre del Paciente"
                style={ styles.TextInput }
                value={ name }
                onChangeText={ setName }
                />

              <TextInput 
                placeholder="Edad"
                style={ styles.TextInput }
                keyboardType='numeric'
                value={ age }
                onChangeText={ setAge }
                />

              <SelectList 
                setSelected={(val) => setCategory(val)} 
                data={data} 
                save="value"
                styles={styles.TextInput}
                boxStyles={{...styles.TextInput, height: 46, paddingLeft: 10 }}
                dropdownStyles= {{backgroundColor: 'white', marginHorizontal: 10 }}
                placeholder="Categoria"
              />

              <TextInput 
                placeholder="Sintoma"
                style={ styles.TextInput }
                value={ sintoma }
                onChangeText={ setSintoma } 
                />

              <TextInput 
                placeholder="Descripcion"
                style={ styles.TextInput }
                value={ description }
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
      </ScrollView> 
      <View style={{ height: 50 }} /> 
    </KeyboardAvoidingView>
  )
}

export default AddPatient
