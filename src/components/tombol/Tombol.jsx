import React from 'react'
import './Tombol.css'

const Tombol = ({children, ...props})=> {
  return (
    <button {...props} className='tombol'>{children}</button>
  )
}

export default Tombol