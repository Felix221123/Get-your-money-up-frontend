// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
// import GetYourMoneyUp from './App/GetYourMoneyUp'
import Questionnaire from './Components/Questionnaire'
 import SupabaseConnection from './home/Supabase'

function App() {
  return (
    <>
      {/* <GetYourMoneyUp /> */}
       <SupabaseConnection/>
      {/*<Questionnaire />*/}
    </>
  )
}

export default App
