import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Header } from '../../components';
import styles from './Home.style';
// import dataCategories from '../../data/dataCategories';
import { CategoryItem } from './components';
import { useGetCategoriesQuery } from '../../services/clinicApi';
import { colors } from '../../constants/colors';


const Home = ({ navigation }) => {

  const { data, isLoading } = useGetCategoriesQuery();
  const [loading, setLoading] = useState(true);

  useEffect(() => { // sirve para que no se muestre el loading cuando ya se cargaron los datos
    if (data) {
      setLoading(false); 
    }
  }, [data])
  

    return (
      <View style={styles.container}>
        <Header title={'Especialidades'} />

        {
          isLoading ? (
            <ActivityIndicator size="40" color={colors.tertiary} style={ styles.loading } />
          ) : (
            <FlatList
            data={data}
            keyExtractor={category => category}
            renderItem={({item}) => 
              <CategoryItem 
                category={item}
                navigation={navigation}
            /> }
          />
          )}   
        

      </View>
    );
  }
  
  export default Home
  
  