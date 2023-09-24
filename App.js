import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"
// import StackNavigator from "./src/navigator/StackNavigator"
// import SearchNavigator from "./src/navigator/SearchNavigator";
import BottomTabNavigator from './src/navigator/BottomTabNAvigator';


export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)


  if(!fontsLoaded) {
    return null
  }

  return(
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <SearchNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>    
    )   
}

