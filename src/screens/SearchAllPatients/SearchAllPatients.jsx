import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Header, SearchInput } from '../../components';
// import allPatients from '../../data/patients';
import AllPatientsListItem from './components/AllPatientsListItem';
import styles from './SearchAllPatients.style';

import { useGetPatientsQuery } from '../../services/clinicApi';
import { colors } from '../../constants/colors';

const PatientList = ({ navigation }) => {
  const [arrPatients, setArrPatients] = useState([]);
  const [keyWord, setKeyword] = useState('');
  const { data, isLoading } = useGetPatientsQuery();
  //Loading
  const [loading, setLoading] = useState(true);

   useEffect(() => { 
     if (data) {
        const dataArray = Object.values(data);
        const patientsFiltered = dataArray.filter(
          (patient) => patient && patient.name.includes(keyWord)
        );
        setArrPatients(patientsFiltered);
        setLoading(false); 
     }
   }, [ data, keyWord ])
   

  return (
    <View style={styles.container}>

      <Header title="Pacientes" />

      <SearchInput onSearch={setKeyword} />

      {
        loading ? (
          <ActivityIndicator size="40" color={colors.tertiary} style={ styles.loading } />
        ) : (

        <View style={styles.listContainer}>
          <FlatList
            data={arrPatients}
            renderItem={({ item }) => (
              <AllPatientsListItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        )
      }

    </View>
  );
};

export default PatientList;

