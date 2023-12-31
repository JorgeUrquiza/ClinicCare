import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
      },
      input: {
        width: '70%',
        height: 40,
        marginHorizontal: 10,
        paddingLeft: 15,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 18
      },
      buttonAdd: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 8,
      },
      buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
      }
})