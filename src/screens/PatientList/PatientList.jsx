import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header, SearchInput } from '../../components';
import styles from './PatientList.style';
import PatientListItem from './components/PatientListItem/PatientListItem';
import { useSelector } from 'react-redux';
import { useGetPatientsByCategoryQuery } from '../../services/clinicApi';

const PatientList = ({ navigation }) => {
  const category = useSelector(state => state.clinic.categorySelected)
  const [ arrPatients, setArrPatients ] = useState([]);
  const [ keyWord, setKeyword ] = useState('');
  const { data, isLoading } = useGetPatientsByCategoryQuery(category);


  useEffect(() => {
    if (data) {
      const dataArray = Object.values(data);
      const patientsFiltered = dataArray.filter(
        patient => patient.name.includes(keyWord)
      );
      setArrPatients(patientsFiltered);
    }
  }, [data, keyWord]);
  

  return (
    
    <View style={ styles.container } >
      
      <Header title={category} />

      <SearchInput onSearch={setKeyword} />

      <View style={ styles.listContainer } > 

        { !isLoading && (
          <FlatList
            data={arrPatients}
            // data={Object.values(data)}
            renderItem={({item}) => <PatientListItem item={item} navigation={navigation}  />}
            keyExtractor={item => item.id}
          />          
          )}

      </View>
        

    </View>
    
  )
}

export default PatientList

