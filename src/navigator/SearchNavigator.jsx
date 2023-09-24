import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchAllPatients } from '../screens'


const Stack = createNativeStackNavigator()

function SearchNavigator() {
    return (
            <Stack.Navigator
                initialRouteName="SearchAllPatients"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SearchAllPatients" component={SearchAllPatients} />
            </Stack.Navigator>
    )
}

export default SearchNavigator;
