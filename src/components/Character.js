// Write your Character component here
import React from 'react'

export default function StarCharacter(props){
    const {characters}=props
    console.log(props)
    return (
        <>
        {characters.map(character=>{
            return(
                <>
                <h1>Name: {character.name}</h1>
                <p>Gender: {character.gender.toUpperCase()}</p>
                <p>Eye Color: {character.eye_color.toUpperCase()}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Hair Color: {character.hair_color.toUpperCase()}</p>
                <a href={character.starships ? `${character.starships[0]}` : null}> {character.starships.length > 0 ? `${character.name}'s StarShip One` : 'No StarShips here'}</a>
                <a href={character.starships ? `${character.starships[1]}` : null}> {character.starships.length > 0 ? `${character.name}'s StarShip Two` : ' '}</a>
                </>
            )
        })}
        </>
    )
}