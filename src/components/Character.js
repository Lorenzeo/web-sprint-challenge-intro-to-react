// // Write your Character component here
// import React, { useState, useEffect} from "react";
// import axios from 'axios'



// export default function Character(props){
//     //setting up props and state
//     const { characterId, characters } = props
    

//     return(
//         <div>
//             {
//                 characterId.map(character => {
//                    return (<article>
//                         <img src={character.image} alt ={character.name}></img>
//                         <h2>Name:{character.name}</h2>
//                         <h3>Gender:{character.gender}</h3>
//                         <h3>Height:{character.height}</h3>
//                         <h3>HomeWorld:{character.homeworld}</h3>
//                         <h3>Mass:{character.mass}</h3>
//                         <h3>Birth Year:{character.birth_year}</h3>
//                         <h3>Number Of Films: {character.films.length}</h3>
//                     </article>)
//                 })
//             }
//         </div>
//     )

// }