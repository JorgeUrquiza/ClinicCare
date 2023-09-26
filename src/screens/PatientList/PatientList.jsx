import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header, SearchInput } from '../../components';
import styles from './PatientList.style';
// import allPatients from '../../data/patients';
import PatientListItem from './components/PatientListItem/PatientListItem';
import { useSelector } from 'react-redux';
import { useGetPatientsByCategoryQuery } from '../../services/clinicApi';

const PatientList = ({ navigation }) => {
  const category = useSelector(state => state.clinic.categorySelected)
  // const [ arrPatients, setArrPatients ] = useState([]);
  const [ keyWord, setKeyword ] = useState('');
  const { data, isLoading } = useGetPatientsByCategoryQuery(category);


  useEffect(() => {
    
  //   if(category) {

  //     const patients = allPatients.filter(
  //       patient => patient.category === category
  //     )

  //     const patientsFiltered = patients.filter( 
  //       patient => patient.name.includes(keyWord) 
  //     )
  //     setArrPatients(patientsFiltered)
  //   } else {

  //     const patientsFiltered = allPatients.filter( 
  //       patient => patient.name.includes(keyWord) 
  //     )
  //     setArrPatients(patientsFiltered)
  //   }

  // }, [category, keyWord])

  

    // TENGO QUE ARREGLAR EL BUSCADOR
  
    if (data) {
      const dataArray = Object.values(data) // Solucion del error que data era un objeto y no un array
      const patientsFiltered = dataArray.filter(patient =>
        patient.name.includes(keyWord) 
      )
    } 

  }, [keyWord])
  

  return (
    
    <View style={ styles.container } >
      
      <Header title={category} />

      <SearchInput onSearch={setKeyword} />

      <View style={ styles.listContainer } > 

        { !isLoading && (
          <FlatList 
            // data={arrPatients}
            data={Object.values(data)}
            renderItem={({item}) => <PatientListItem item={item} navigation={navigation}  />}
            keyExtractor={item => item.id}
          />          
          )}

      </View>
        

    </View>
    
  )
}

export default PatientList

