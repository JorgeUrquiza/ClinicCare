import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"
// import StackNavigator from "./src/navigator/StackNavigator"
// import SearchNavigator from "./src/navigator/SearchNavigator";
import BottomTabNavigator from './src/navigator/BottomTabNAvigator';
import { Provider } from "react-redux";
import { store } from "./src/store/index"

export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)


  if(!fontsLoaded) {
    return null
  }

  return(
    <Provider store={store} >
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>    
    </Provider>
    )   
}

