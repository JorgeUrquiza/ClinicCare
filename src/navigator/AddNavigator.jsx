import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddPatient } from '../screens'


const Stack = createNativeStackNavigator()

function AddNavigator() {
    return (
            <Stack.Navigator
                initialRouteName="AddPatient"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AddPatient" component={AddPatient} />
            </Stack.Navigator>
    )
}

export default AddNavigator;
