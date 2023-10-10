import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import SearchNavigator from './SearchNavigator'
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

import AddNavigator from "./AddNavigator";
import ProfileNavigator from "./ProfileNavigator"; 


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}
        >
            <BottomTab.Screen name="StackNavigator" component={StackNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="list-outline"
                        size={30}
                        color={focused ? 'white' : 'grey' }
                    />
                )
            }} />
            <BottomTab.Screen name="SearchNavigator" component={SearchNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="search-outline"
                        size={30}
                        color={focused ? 'white' : 'grey' }
                    />
                )
            }} />

            {/* Probando addPAtient */}
            <BottomTab.Screen name="AddNavigator" component={AddNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="person-add-outline"
                        size={30}
                        color={focused ? 'white' : 'grey' }
                    />
                )
            }} />

            <BottomTab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="camera-outline"
                        size={30}
                        color={focused ? 'white' : 'grey' }
                    />
                )
            }} />

        </BottomTab.Navigator>
    )

}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.secondary,
        height: '7%',
        borderColor: '#007A7A',
        borderTopWidth: 1,
        
    }
})