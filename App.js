import { useState } from "react"
import { Home, PatientList, PatientDetails } from "./src/screens"
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"
import StackNavigator from "./src/navigator/StackNavigator"

export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)


  if(!fontsLoaded) {
    return null
  }

  return <StackNavigator />

  
}

