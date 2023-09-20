import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Header, SearchInput } from '../../components';
import styles from './PatientList.style';
import allPatients from '../../data/patients';
import PatientListItem from './components/PatientListItem/PatientListItem';

const PatientList = ({ navigation, route }) => {

  const [ arrPatients, setArrPatients ] = useState([]);
  const [ keyWord, setKeyword ] = useState('');
  const { category } = route.params

  useEffect(() => {
    
    if(category) {

      const patients = allPatients.filter(
        patient => patient.category === category
      )

      const patientsFiltered = patients.filter( 
        patient => patient.name.includes(keyWord) 
      )
      setArrPatients(patientsFiltered)
    } else {

      const patientsFiltered = allPatients.filter( 
        patient => patient.name.includes(keyWord) 
      )
      setArrPatients(patientsFiltered)
    }

  }, [category, keyWord])
  

  return (
    
    <View style={ styles.container } >
      
      <Header title={category} />

      <SearchInput onSearch={setKeyword}/>

      <View style={ styles.listContainer } > 

        <FlatList 
          data={arrPatients}
          renderItem={({item}) => <PatientListItem item={item} navigation={navigation}  />}
          keyExtractor={item => item.id}
        />

      </View>
        

    </View>
    
  )
}

export default PatientList

