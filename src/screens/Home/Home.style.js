import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primary,
        paddingTop: 70
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
      },
      loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})