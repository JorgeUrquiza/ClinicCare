import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native';

const PrimaryModal = ({ modalVisible, onHandleDelete }) => {
  return (
    <Modal
    visible= { modalVisible }
    animationType='fade'
    transparent= { true }
    >
    <View style={ styles.modalContainer } >
      <View style={ styles.modalContent }>
        <View  >
          <Text style={ styles.modalTitle }>Eliminar</Text>  
        </View>  
        <View style={ styles.modalMessage } >
          <Text>¿Estas seguro que desea eliminar al paciente?</Text>
        </View>
        <View style={ styles.modalButton } >
          
          <TouchableOpacity
            onPress={ onHandleDelete }
            style={ styles.confirmButton }
          >
            <Text style={ styles.confirmText } >Confirmar</Text>
          </TouchableOpacity>
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
        paddingVertical: 35,
        paddingHorizontal: 25,
        alignItems: 'center',
    
      },
      modalTitle:{
        fontSize: 20,
        fontWeight: 'bold'
      },
      modalMessage: {
        marginTop: 10,
        marginBottom: 15,
      },
      confirmButton:{
        backgroundColor: '#E58824',
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
      },
      confirmText: {
        color: 'white',
        fontWeight: '500'
      }
})