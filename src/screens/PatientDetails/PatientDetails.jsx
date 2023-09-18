import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../components';
import styles from './PatientDetails.style';

import doctor from '../../assets/images/doctor.png'

const PatientDetails = ({patient}) => {
  return (
    <View style={styles.container} >

        <Header title={'Detalles'} />
        
        <Image 
          source={doctor}
          style={ styles.image }
        />

        <Text style={styles.title} >{ patient.name}</Text>

        <View style={styles.containerDescription}>
          <Text style={ styles.subTitle } >Edad: </Text>
          <Text style={ styles.description } >{patient.age}</Text>
          <Text style={ styles.subTitle } >Especialidad: </Text>
          <Text style={ styles.description } >{patient.category}</Text>
          <Text style={ styles.subTitle } >Sintomas: </Text>
          <Text style={ styles.description } >{patient.sintoma}</Text>
          <Text style={ styles.subTitle } >Descripcion: </Text>
          <Text style={ styles.description } >{patient.description}</Text>  
        </View>       

    </View>
  )
}

export default PatientDetails