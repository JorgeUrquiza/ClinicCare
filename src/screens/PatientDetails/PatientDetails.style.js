import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primary,
        paddingTop: 70,
        paddingHorizontal:10,
      },
    title: {
        fontSize: 30,
    },
    description: {
        fontSize: 20
    }
})