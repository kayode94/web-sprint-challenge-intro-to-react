import React, {useState, useEffect} from 'react';
import axios from 'axios'
import StarCharacters from '../src/components/Character'
import './App.css';

const App = () => {
  const [starData, setStarData] = useState([]) 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
    .then(response=>{
      setStarData(response.data.results)
      console.log(response.data.results)
    })
    .catch(error=>{
      console.log('THIS IS YOUR ERROR--------->', error)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">StarWars Characters</h1>
      {<StarCharacters key={starData.id} characters={starData}/>}
    </div>
  );
}

export default App;
