import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    header: {
        top: -25,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 200,
        marginVertical: 20
    },
    button: {
        backgroundColor: colors.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 250,
        borderRadius: 10,
        marginTop: 20,
    },
    outSessionButton: {
        backgroundColor: colors.quaternary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '90%',
        borderRadius: 10,
        top: 80,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
    
});