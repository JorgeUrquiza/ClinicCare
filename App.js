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
    backgroundColor: '#00CCCC',
    alignItems: 'center',
    paddingTop: 100
  },
  textCointainer: {
    width: '100%',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#ffffff77'
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
});


