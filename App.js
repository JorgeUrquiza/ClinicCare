import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"
import { Provider } from "react-redux";
import  store  from "./src/store/index";
import MainNavigator from "./src/navigator/MainNavigator";
// import { Singup } from "./src/screens";
import { init } from "./src/db";

init()
  .then(()=> console.log('Database initialized'))
  .catch(err => console.log('Database failed to connect', err))

export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)


  if(!fontsLoaded) {
    return null
  }

  return(
    <Provider store={store} >
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>    
    </Provider>
    )

  // return <Singup />
}

