import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008F8F',
        alignItems: 'center',
        paddingTop: 70
      },
      title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
      },
      textCointainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderColor: 'white',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff99'
      },
      text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
      },
      icon: {
        paddingRight: 10,
      }
})