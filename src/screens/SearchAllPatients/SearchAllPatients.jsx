import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import { Header, SearchInput } from '../../components';
import AllPatientsListItem from './components/AllPatientsListItem';
import styles from './SearchAllPatients.style';

import { useGetPatientsQuery } from '../../services/clinicApi';
import { colors } from '../../constants/colors';

const PatientList = ({ navigation }) => {
  const [arrPatients, setArrPatients] = useState([]);
  const [keyWord, setKeyword] = useState('');
  const { data, isLoading, refetch } = useGetPatientsQuery();
  //Loading
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    refetch().finally(() => setRefreshing(false));
  }

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
              refreshControl={
                <RefreshControl     // Para refrescar la lista
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          </View>
          )
        }
      </View>


  );
};

export default PatientList;

