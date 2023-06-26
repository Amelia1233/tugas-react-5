import React from 'react'
import { TbAmpersand } from "react-icons/tb";
import {TiPointOfInterest} from "react-icons/ti";
function Header() {
  return (
    <header>
       <h2 style = {{
         backgroundColor:'lightblue', fontSize:30,display:'flex',alignItems:'center'
       }}><TiPointOfInterest/>Tugas 5 <TbAmpersand /> 6</h2>
    </header>
  )
}

export default Header