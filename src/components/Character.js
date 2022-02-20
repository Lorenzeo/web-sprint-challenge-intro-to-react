import React, {useState, useEffect } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const kf = keyframes `
    100% {
        opacity: 100;
        transform: scale (1) rotateZ(0);
    }
`
const StyledDetails = styled.div`
    opacity: 0;
    transform: scale(.8);
    animation: ${kf} .5s ease-in-out forwards;
    
    

    background-color: ${props => props.color ? props.color : '#d6a724'};
    p {
        color: ${props => props.theme.primaryColor};
    }
    h2 {
        color: ${props => props.theme.primaryColor};
    }
    container {
        display: flex
        border: 1px solid #d2d2d2;
        box-shadow: 0px 1px 6px -2px #807f7f;
        border-radius: 8px;
        margin-top: 16px;
        padding: 16px;

        button {
            display: center;
            border-radius: 100px;
          }
`

export default function Character(props){
    //setting up props and state
    const {close, characterId, characters} = props


    
    
 

    return( 
        <StyledDetails className ='container'>
            {
            characters.map(character =>{
                return (
                    <article>
                        <h2>Information on {characterId}</h2>
                        <p>{character.name} is {character.height} tall with a mass of {character.mass}</p>
                        <p>{character.name} also has a skin color of {character.skin_color} with a {character.birth_year}</p>
                    </article>
                )
            })
            }
           
       <button onClick={close}>Close</button>
        </StyledDetails>)
    }


           
//     return(
//         <div>
//             {
//                 characters.map(character => {
//                    return (<article >
//                         <h2> {character.name}</h2>
//                         { show ?
//                         <h5><p>Gender: {character.gender}</p>
//                         <p>Height: {character.height}</p>
//                         <p>Mass: {character.mass}</p>
//                         <p>Birth Year: {character.birth_year}</p>
//                         <p>Number Of Films: {character.films.length}</p ></h5>: null}
                        
//                             <button onClick={()=>setShow(!show)}>Target Information</button>
//                     </article>)
//                 })
//             }
//         </div>
//     )