import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 200,
        marginVertical: 70
    },
    button: {
        backgroundColor: colors.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 250,
        borderRadius: 10,
        marginTop: 25,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
    
});