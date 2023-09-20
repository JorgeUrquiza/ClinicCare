import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, PatientList, PatientDetails } from '../screens'
// import { View } from "react-native";
// import { Header } from "../components";


const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    // headerShown: true,
                    // header: () => (
                    //     <View >
                    //         <Header title={route.name} />
                    //     </View>
                    // )
                })}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PatientList" component={PatientList} />
                <Stack.Screen name="PatientDetails" component={PatientDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

// El Header esta desactivado por tema estetico, aunque si se descomenta funciona.
