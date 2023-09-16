import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        backgroundColor: colors.primary,
        paddingTop: 70
    },
    listContainer: {
        flex: 1,
        marginTop: 15,
        paddingHorizontal: 15,
    }
})