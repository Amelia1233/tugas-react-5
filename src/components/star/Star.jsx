import React from 'react'
import './Star.css'

const Star = (props) => {
  return (
    <div className='star'> 
      <h3>{props.id}. {props.name}</h3>
      <p>Diameter : {props.diameter} Km</p>
    </div>
  )
}

export default Star