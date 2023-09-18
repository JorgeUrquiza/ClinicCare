import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primary,
        paddingTop: 70,
        paddingHorizontal:10,
        flexDirection: 'column',
        alignItems: 'center'
      },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 20
    },
    containerDescription: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ffffff99',
        borderColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
    },
    subTitle: {
        fontFamily: 'PlayfairBold',
        fontSize: 22
    },
    description: {
        fontSize: 20,
        paddingBottom: 10
    }
})