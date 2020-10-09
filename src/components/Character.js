// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharacterStyles = styled.div`
h1{
    color:goldenrod;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
}
p{
    font-weight:bold;
    font-size:1.2rem;
    color:crimson;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: black;
}
a{
    display: flex;
    flex-direction: column;
    transition: all 1.5s ease-in-out;
    color:royalblue;
    width:70%;
    justify-content:center;
    margin-left:15%;
    &:hover{
        transform:scale(1.5);
        transition: all 1.5s ease-in-out;
        background-color:red;
        color:green;
    }
}
`

export default function StarCharacter(props){
    const {characters}=props
    console.log(props)
    return (
        <>
        {characters.map(character=>{
            return(
                <>
                <CharacterStyles>
                <h1>Name: {character.name}</h1>
                <p>Gender: {character.gender.toUpperCase()}</p>
                <p>Eye Color: {character.eye_color.toUpperCase()}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Hair Color: {character.hair_color.toUpperCase()}</p>
                <a href={character.starships ? `${character.starships[0]}` : null}> {character.starships.length > 0 ? `${character.name}'s StarShip One` : 'No StarShips here'}</a>
                <a href={character.starships ? `${character.starships[1]}` : null}> {character.starships.length > 0 ? `${character.name}'s StarShip Two` : ' '}</a>
                </CharacterStyles>
                </>
            )
        })}
        </>
    )
}