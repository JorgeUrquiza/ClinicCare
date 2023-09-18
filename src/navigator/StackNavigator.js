import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, PatientList, PatientDetails } from '../screens'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" 
                screenOptions={{
                    headerShown: false,
                }} 
                >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PatientList" component={PatientList} />
                <Stack.Screen name="PatientDetails" component={PatientDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default  StackNavigator;