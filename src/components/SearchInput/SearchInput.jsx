import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './SearchInput.style'

const SearchInput = ({ onSearch }) => {

    const [value, setValue] = useState('');

    const search = () => {
        onSearch(value);
    }

    // const clearInput = () => {
    //     setValue('');
    //     onSearch('');
    // }


  return (
    <View style={ styles.inputContainer } >
      <View style={ styles.textBackground } > 
           
        <TextInput
          placeholder='Nombre del paciente'
          style={ styles.textInput }
          placeholderTextColor={ 'grey' }
          value={ value }
          onChangeText={ setValue }
        />

        <Ionicons 
            name='search-outline'
            size={ 30 }
            color={ 'grey' }
            onPress={ search }
        />

      </View>
    </View>
  )
}

export default SearchInput

