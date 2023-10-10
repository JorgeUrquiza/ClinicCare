import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    inputField: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingLeft: 5,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    newUserContainer: {
        alignItems: 'center',
        marginTop: 15,
    },
    buttonReturn: {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 2,
        borderColor: colors.tertiary,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 100,
    },
});