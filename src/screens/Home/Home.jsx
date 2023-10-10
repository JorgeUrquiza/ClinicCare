import React from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../../components';
import styles from './Home.style';
// import dataCategories from '../../data/dataCategories';
import { CategoryItem } from './components';
import { useGetCategoriesQuery } from '../../services/clinicApi';


const Home = ({ navigation }) => {

  const { data, isLoading } = useGetCategoriesQuery();

    return (
      <View style={styles.container}>
        <Header title={'Especialidades'} />
        
        { !isLoading && (
          <FlatList
            // data={dataCategories}
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

