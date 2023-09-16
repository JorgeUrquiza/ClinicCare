import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './SearchInput.style'

const SearchInput = ({ onSearch }) => {

    const [value, setValue] = useState('');

    const search = () => {
        onSearch(value);
    }

    const clearInput = () => {
        setValue('');
        onSearch('');
    }


  return (
    <View style={ styles.inputContainer } >
      <TextInput
        style={ styles.input }
        placeholder='Nombre del paciente'
        placeholderTextColor={ 'grey' }
        value={ value }
        onChangeText={ setValue }
      />
    <TouchableOpacity onPress={search} >
        <Ionicons 
            name='search-outline'
            size={ 30 }
            color={ 'white' }
        />
    </TouchableOpacity>

    <TouchableOpacity onPress={ clearInput } >
        <Ionicons 
            name='arrow-undo-circle-outline'
            size={ 30 }
            color={ 'white' }
        />
    </TouchableOpacity>

    </View>
  )
}

export default SearchInput

