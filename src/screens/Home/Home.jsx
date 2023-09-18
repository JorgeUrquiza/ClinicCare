import React from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../../components';
import styles from './Home.style';
import dataCategories from '../../data/dataCategories';
import { CategoryItem } from './components';


const Home = ({setCategorySelected, navigation }) => {
      
    return (
      <View style={styles.container}>
        <Header title={'Historia Clinica'} />
        
        <FlatList
          data={dataCategories}
          keyExtractor={category => category}
          renderItem={({item}) => 
            <CategoryItem 
              category={item}
              navigation={navigation}
          /> }
        />

      </View>
    );
}

export default Home

