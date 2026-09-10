import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css';

function App() {
  // used to track input query 
  const [searchQuery, setSearchQuery] = useState('');
  const [players, setPlayers] = useState([]);

  function searchPlayer({ id })
  {
  fetch(`http://localhost:8080/player/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the response data as needed
      setPlayers(prevPlayers => [...prevPlayers, data]);    })
    .catch(error => {
      console.error('Error fetching player data:', error);
    });
  }

  return (
    <>
    <div>
      <h2>Search Names</h2>

<div className="field has-addons">
  <div className="control is-expanded">
    <input
      className="input"
      type="text"
      placeholder="Enter NHL player ID..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>

  <div className="control">
    <button
      className="button is-link"
      onClick={() => searchPlayer({ id: searchQuery })}
    >
      Search
    </button>
  </div>
</div>
      <h2>Player Information</h2>
      {players.map((player) => (
        <div className="box mb-4" key={player.playerId}>
        <p>Player ID: {player.playerId}</p>
        <p>Name: {player.firstName} {player.lastName}</p>
        <p>Position: {player.position}</p>
        <p>Number: {player.sweaterNumber}</p>
        </div>
      ))}

    </div>
    </>

  )
}

export default App
