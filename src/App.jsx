import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Star from './components/star/Star'
import Tombol from './components/tombol/Tombol'
import {BiPlus} from "react-icons/bi";
import {MdZoomInMap, MdZoomOutMap} from "react-icons/md";
import { FaTrash} from "react-icons/fa";
import './App.css'


const App = () => {
    const [stars, setStars] = useState([
      {
        id: 1,
        name: "Antares",
        diameter: 94615
      },
      {
        id: 2,
        name: "Aldebaran",
        diameter: 61402
      },
      {
        id: 3,
        name: "Adara",
        diameter: 1934
      },
       
    ])

    const [newId, setId] = useState('')
    const [nextId, setNextId] = useState('')
    const [newStar, setNewStar] = useState('')
    const [newDiameter, setNewDiameter] = useState('')

    const zoomIn = () =>{
      setStars(stars.map((value)=>{
        if (value.id == nextId){
          return{
            ...value,
            diameter: value.diameter+200
          }
        }
        return value
      }))
    }

    const zoomOut = () =>{
      setStars(stars.map((value)=>{
        if (value.id == nextId){
          return{
            ...value,
            diameter: value.diameter-200
          }
        }
        return value
      }))
    }

    const deleteById = () => {
      setStars(stars.filter((nilai) => {
        return nilai.id !== parseInt(nextId); 
      }));
    };
    

    const rearDelete = () => {
      if (stars.length > 0) {
        setStars(stars.slice(0, -1));
      }
    };
    
    const deleteFront = () => {
      if (stars.length > 0) {
        setStars(stars.slice(1));
      }
    };
    
    const removeAll = () => {
      setStars([]);
    };
    

    const editById = (e) => {
      setStars(stars.map((nilai) => {
        if (nilai.id === parseInt(nextId)) {
          return {
            ...nilai,
            name: e.target.value
          };
        } else {
          return nilai;
        }
      }));
    };
    
    return(
      <>
      <Header/>
      <main>
        <div style = {{display:'flex', flexDirection:'column', gap:20, textAlign:'center'}}>
          {
            stars.map((value, index)=>{
              return <Star 
              key = {index} 
              id = {value.id} 
              name = {value.name} 
              diameter = {value.diameter} />
            })
          }
        </div>
        <Card>
          <form>
            <h3>ADD</h3>
            ID :
            <input type='number' value={newId} onChange = {(e)=> setId (e.target.value)}/>
            Name :
            <input type='text' value={newStar} onChange = {(e)=> setNewStar (e.target.value)}/>
            Diameter :
            <input type='text' value={newDiameter} onChange = {(e)=> setNewDiameter (e.target.value)}/>
           
            <div className = 'add'>
              <Tombol type="button" onClick = {()=>{
                setStars([{id: newId, name: newStar, diameter: newDiameter}, ...stars])
              }}><BiPlus/>Front</Tombol>

              <Tombol type="button" onClick = {()=>{
                setStars([...stars, {id: newId, name: newStar, diameter: newDiameter}])
              }}><BiPlus/>Behind</Tombol>
            </div>
          </form>
        </Card>

        <Card>
          <form>
            <h3>Edit/Delete By Id</h3>
            ID :
            <input type='number' value={nextId} onChange = {(e)=> setNextId (e.target.value)}/>
            Name :
            <input type='text' name = 'name' onChange={editById}/>
            Diameter :
            <div className='diameter'>
              <Tombol type='button' onClick={zoomIn}> <MdZoomInMap/>Zoom In</Tombol>
              <Tombol type='button' onClick={zoomOut}> <MdZoomOutMap/>Zoom In</Tombol>
            </div>
            <Tombol type='button' onClick={deleteById}> <FaTrash/>Delete</Tombol>
          </form>
        </Card>

        <Card>
          <form>
            <h3>Delete</h3>
            <div className='delete'>
              <Tombol type='button' onClick={deleteFront}>< FaTrash/>Front</Tombol>
              <Tombol type='button' onClick={rearDelete}>< FaTrash/>Behind</Tombol>
            </div>
              <Tombol type='button' onClick={removeAll}>< FaTrash/>All</Tombol>
              </form>
        </Card>

      </main>
      </>
    )
  }

export default App