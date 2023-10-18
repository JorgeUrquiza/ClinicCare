import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import styles from './PrimaryModal.style'


const PrimaryModal = ({ modalVisible, onHandleDelete, onHandleClose, title, message }) => {

  return (
    <Modal
    visible= { modalVisible }
    animationType='fade'
    transparent= { true }
    >
    <View style={ styles.modalContainer } >
      <View style={ styles.modalContent }>
        <View  >
          <Text style={ styles.modalTitle }>{title}</Text>  
        </View>  
        <View style={ styles.modalMessage } >
          <Text>{message}</Text>
        </View>

        <View style={ styles.modalButton } >          
          {/* <TouchableOpacity
            onPress={ onHandleDelete }
            style={ styles.confirmButton }
          >
            <Text style={ styles.confirmText } >Confirmar</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={ onHandleClose }
            style={ styles.closeButton }
          >
            <Text style={ styles.confirmText } >Cerrar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  </Modal> 
  )
}

export default PrimaryModal;

