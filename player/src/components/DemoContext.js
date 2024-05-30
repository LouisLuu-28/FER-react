
// contextHook
import React,{createContext, useContext, useState} from 'react'
const contextValue = createContext()
export default function DemoContext() {
  const [gene,setGene] =useState('lovely eyes')
  return (
    <>
    <contextValue.Provider value={gene}>
 <Com3/>
 <h1/>
 <Com2/>

    </contextValue.Provider>
    </>
  )
}

function Com1(){
  return(<>
  <Com2 />
  </>)
}
function Com2(){
  return(<>
  <Com3 />
  </>)
}
function Com3(){
  const valueFromContext= useContext(contextValue)
  return(<>gene:{valueFromContext}</>)
}
