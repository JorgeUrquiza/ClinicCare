import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    inputContainer: {
      marginHorizontal: 10,        
      },
      textBackground: {
        backgroundColor: 'white',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        flexDirection: 'row' ,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,        
      },
      textInput: {
        flex: 1,
        fontSize: 18,
      },
})