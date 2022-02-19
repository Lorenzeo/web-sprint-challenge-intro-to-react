import React, {useState, useEffect } from 'react'
import axios from 'axios'


export default function Character(props){
    //setting up props and state
    
    const[movies, setMovies] = useState([])
     
    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
        .then( res => {
          setMovies(res.data.results);
          const movies = res.data.results.map(movie =>{
              return movie
          })
          console.log(res.data.results)
          })
           
        .catch(err => console.error(err))
      })
 

    return( <div> 
        <p>{movies.title}</p>
    
    </div>
        
               )}