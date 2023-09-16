import { useState } from "react"
import { Home, PatientList } from "./src/screens"
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"

export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState('')

  if(!fontsLoaded) {
    return null
  }

  return categorySelected 
    ? ( <PatientList category={categorySelected}/> )
    : ( <Home setCategorySelected={setCategorySelected} /> )
  
  
}

