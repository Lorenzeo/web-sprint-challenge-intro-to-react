// Write your Character component here
import React, { useState, useEffect} from "react";
import axios from 'axios'



export default function Character(props){
    //setting up props and state
    const {characters} = props
    

    return(
        <div>
            {
                characters.map(character => {
                   return (<article>
                        <img src={character.image} alt ={character.name}></img>
                        <h2>Name:{character.name}</h2>
                        <p>Gender:{character.gender}</p>
                        <p>Height:{character.height}</p>
                        <p>HomeWorld:{character.homeworld}</p>
                        <p>Mass:{character.mass}</p>
                        <p>Birth Year:{character.birth_year}</p>
                        <p>Number Of Films: {character.films.length}</p >
                    </article>)
                })
            }
        </div>
    )

}