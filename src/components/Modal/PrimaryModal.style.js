import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 25,
        alignItems: 'center',
    
      },
      modalTitle:{
        fontSize: 20,
        fontWeight: 'bold'
      },
      modalMessage: {
        marginTop: 10,
        marginBottom: 15,
      },
      modalButton: {        
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      confirmButton:{
        backgroundColor: colors.quaternary,
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
        marginHorizontal: 5
      },
      closeButton: {
        backgroundColor: colors.secondary,
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
        marginHorizontal: 10
      },
      confirmText: {
        color: 'white',
        fontWeight: '500'
      }
})