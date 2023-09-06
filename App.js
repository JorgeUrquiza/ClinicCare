import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import PrimaryModal from './src/components/PrimaryModal';
import PatientTextInput from './src/components/PatientTextInput';
import PatientList from './src/components/PatientList';


export default function App() {

  const [ textValue , setTextValue ] = useState('');
  const [ itemsList, setItemsList ] = useState([]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);

  const onHandleChangeItem = ( text ) => setTextValue(text)
  

  const addItem = () => {
    setItemsList(prevState=> [
      ...prevState, 
      { id: Math.random(), value: textValue}
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity 
      style={ styles.textCointainer }
      onPress={ () => onHandleModal(index) }      
      >
      <Text style={ styles.text } >{item.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.title } >Historia Clinica</Text>
      <PatientTextInput 
        addItem={ addItem } 
        onHandleChangeItem={ onHandleChangeItem }
        textValue={ textValue } 
        />

      <PatientList itemsList={ itemsList } renderListItem={ renderListItem } />

      <PrimaryModal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008F8F',
    alignItems: 'center',
    paddingTop: 70
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  textCointainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 10,
    paddingLeft: 10,
    backgroundColor: '#ffffff99'
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
});


