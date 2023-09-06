import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

const PrimaryModal = ({ modalVisible, onHandleDelete }) => {
  return (
    <Modal
    visible= { modalVisible }
    animationType='fade'
    transparent= { true }
    >
    <View style={ styles.modalContainer } >
      <View style={ styles.modalContent }>
        <View style={ styles.modalTitle } >
          <Text>Mi Modal</Text>  
        </View>  
        <View style={ styles.modalMessage } >
          <Text>Estas seguro de eliminar este elemento?</Text>
        </View>
        <View style={ styles.modalButton } >
          <Button title='Confirmar' onPress={ onHandleDelete }/>
        </View>
      </View>
    </View>
  </Modal> 
  )
}

export default PrimaryModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    
      },
      modalTitle:{
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
})