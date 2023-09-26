import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: colors.primary,
    },
    TextInput: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    Button: {
        backgroundColor: colors.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '50%', 
        height: 40
    },
    ButtonText: {
        color: 'white',
        fontSize: 20,
    }
})