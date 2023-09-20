import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './SearchInput.style'
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

const SearchInput = ({ onSearch }) => {

    const [value, setValue] = useState('');

    const debouncedValue = useDebouncedValue(value)

    useEffect(() => {
      onSearch(debouncedValue);
    }, [debouncedValue])
    

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
        />

      </View>
    </View>
  )
}

export default SearchInput

