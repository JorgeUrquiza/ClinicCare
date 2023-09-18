import { useState } from "react"
import { Home, PatientList, PatientDetails } from "./src/screens"
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"

export default function App() {
  
  const [ fontsLoaded ] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState('')
  const [ patientSelected, setPatientSelected ] = useState()

  if(!fontsLoaded) {
    return null
  }

  // return categorySelected 
  //   ? ( <PatientList category={categorySelected}/> )
  //   : ( <Home setCategorySelected={setCategorySelected} /> )
  
  // return <PatientDetails />

  return patientSelected ? (
    <PatientDetails patient={patientSelected} />
    ) :  categorySelected 
    ? ( <PatientList 
          category={categorySelected} 
          setPatientSelected={setPatientSelected}/> )
    : ( <Home setCategorySelected={setCategorySelected} /> )
  
}

