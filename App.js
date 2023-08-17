import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder!</Text>
      <Text style={{ color: 'white' }} >Bienvenido a ClinicCare</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
