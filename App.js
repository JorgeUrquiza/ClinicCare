import { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';


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

      <View style={ styles.inputContainer }>
        <TextInput 
          style={ styles.input }
          placeholder='Nombre del paciente'
          placeholderTextColor={ 'grey' }
          value={ textValue }
          onChangeText={ onHandleChangeItem }
        />
        <Button 
          title='ADD'
          onPress={ addItem }
        />
      </View>


      <View style={ styles.listContainer } >
        <FlatList 
          data={ itemsList }
          renderItem={ renderListItem }
          keyExtractor={ item => item.id }
        />        
      </View>

      <Modal
        visible= { modalVisible }
        animationType='fade'
      >
        <View style={ styles.modalTitle } >
          <Text>Mi Modal</Text>  
        </View>  
        <View style={ styles.modalMessage } >
          <Text>Estas seguro de eliminar este elemento?</Text>
        </View>
        <View style={ styles.modalButton } >
          <Button title='Confirmar' onPress={ onHandleDelete }/>
        </View>
      </Modal>  

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
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 300,
    height: 40,
    marginHorizontal: 10,
    paddingLeft: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    fontSize: 18
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    marginTop: 15,
    // borderWidth: 1,
    borderColor: 'white',
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
  modalTitle:{
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  modalButton: {
    marginTop: 15,
  }
});


// <View style={ styles.textCointainer } >
// <Text style={ styles.text } >Paciente 1</Text>
// </View>