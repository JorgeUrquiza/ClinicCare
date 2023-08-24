import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={ styles.inputContainer }>
        <TextInput 
          style={ styles.input }
          placeholder='Nombre del paciente'
        />
        <Button 
          title='ADD'
        />
      </View>


      <View style={ styles.listContainer } >

        <View style={ styles.textCointainer } >
          <Text style={ styles.text } >Paciente 1</Text>
        </View>

        <View style={ styles.textCointainer } >
          <Text style={ styles.text } >Paciente 2</Text>
        </View>

        <View style={ styles.textCointainer } >
          <Text style={ styles.text } >Paciente 3</Text>
        </View>
        
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 300,
    height: 40,
    marginHorizontal: 10,
    paddingLeft: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    fontSize: 18
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  textCointainer: {
    width: '90%',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#ffffff77'
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  }
});
