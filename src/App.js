import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character';
import Information from './components/Information'
import Movies from './components/Movies'
 
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentId, setCurrentId] = useState(null)
  
  const openDetails = id =>{
    setCurrentId(id)
  }
  const closeDetails = () =>{
    setCurrentId(null)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then( res => {
      setCharacters(res.data)})
    .catch(err => console.error(err))
  }, [])

  
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  

     
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="Root">
      <h1 className="Header">Characters</h1>
       
       { characters.map(character => {
          return <Information info={character} key={character.name} openDetails={openDetails} />
       }) }
      {
        currentId && <Character  characters={characters} characterId={currentId} close={closeDetails} />
      }
      {
        <Movies/>
      }

    </div>
  );
}
 

export default App;
