import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header, SearchInput } from '../../components';
import allPatients from '../../data/patients';
import AllPatientsListItem from './components/AllPatientsListItem';
import styles from './SearchAllPatients.style';

const PatientList = ({ navigation }) => {
  const [arrPatients, setArrPatients] = useState([]);
  const [keyWord, setKeyword] = useState('');

  useEffect(() => {
    const patientsFiltered = allPatients.filter((patient) =>
      patient.name.includes(keyWord)
    );
    setArrPatients(patientsFiltered);
  }, [keyWord]);

  return (
    <View style={styles.container}>

      <Header title="Pacientes" />

      <SearchInput onSearch={setKeyword} />

      <View style={styles.listContainer}>
        <FlatList
          data={arrPatients}
          renderItem={({ item }) => (
            <AllPatientsListItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default PatientList;

