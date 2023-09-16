import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Header, SearchInput } from '../../components';
import styles from './PatientList.style';
import allPatients from '../../data/patients';


// probando
import PatientListItem from './components/PatientListItem/PatientListItem';

const PatientList = ({category}) => {

  const [ arrPatients, setArrPatients ] = useState([]);
  const [ keyWord, setKeyword ] = useState('');

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

        {/* <FlatList 
          data={arrPatients}
          renderItem={({item}) => (<View><Text>{item.name}</Text></View>)}
          keyExtractor={item => item.id}
        /> */}

        <FlatList 
          data={arrPatients}
          renderItem={({item}) => <PatientListItem item={item.name}/>}
          keyExtractor={item => item.id}
        />

      </View>
        

    </View>
    
  )
}

export default PatientList

