// @ts-expect-error ignore the next line
import React from 'react'
import './App.css'
import SupabaseConnection from './home/Supabase'

function App() {
  return (
    <>
    <SupabaseConnection/>
      <div className="font-bold uppercase">hello world</div>
    </>
  )
}

export default App
