import React, { useState } from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PrimaryModal, PatientTextInput, PatientList } from '../../components';
import styles from './Home.style';


const Home = () => {
    
    const [ textValue , setTextValue ] = useState('');
    const [ itemsList, setItemsList ] = useState([]);
    const [ itemSelected, setItemSelected ] = useState({});
    const [ modalVisible, setModalVisible ] = useState(false);
  
    const onHandleChangeItem = ( text ) => setTextValue(text)    
  
    const addItem = () => {
      if( textValue.length < 3 ){
        return
      }
  
      setItemsList(prevState=> [
        ...prevState, 
        { id: Math.random(), value: textValue}
      ])
      setTextValue('')
    }
  
    const renderListItem = ({ item, index }) => (
        <View 
        style={ styles.textCointainer }
        onPress={ () => onHandleModal(index) }      
        >
          <Text style={ styles.text } >{item.value}</Text>
  
          <TouchableOpacity
            style= { styles.icon }
            onPress={ () => onHandleModal(index) }
          >
            <Ionicons name="trash-outline" size={ 30 } color={ '#CB0126' }/>
          </TouchableOpacity>
  
        </View>  
    )
  
    const onHandleDelete = () => {
      let arr = itemsList
      arr.splice(itemSelected, 1)
      setItemsList(arr)
      setModalVisible(false)
    }
    const onHandleClose = () => {      
      setModalVisible(false)
    }  
    const onHandleModal = index => {
      setModalVisible(true)
      setItemSelected(index)
    }
  
    return (
      <View style={styles.container}>
        <Text style={ styles.title } >Historia Clínica</Text>
        <PatientTextInput 
          addItem={ addItem } 
          onHandleChangeItem={ onHandleChangeItem }
          textValue={ textValue } 
          />
  
        <PatientList itemsList={ itemsList } renderListItem={ renderListItem } />
  
        <PrimaryModal modalVisible={modalVisible} onHandleDelete={onHandleDelete} onHandleClose={onHandleClose} />
  
      </View>
    );
}

export default Home

