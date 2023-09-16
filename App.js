import { useState } from "react"
import { Home, PatientList } from "./src/screens"

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  return categorySelected 
    ? ( <PatientList category={categorySelected}/> )
    : ( <Home setCategorySelected={setCategorySelected} /> )
  
  
}

