import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Singup } from "../screens";

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Singup" component={Singup} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator;
