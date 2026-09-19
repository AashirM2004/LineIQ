import { useEffect, useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css';
import PlayerCard from './playerCard';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`http://localhost:8080/player/search/${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSearchResults(data);
        })
        .catch(error => {
          console.error('Error searching for players:', error);
        });
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  function selectPlayer(player) {
    fetch(`http://localhost:8080/player/${player.playerId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setSelectedPlayers(prevPlayers => [
          ...prevPlayers,
          data
        ]);

        setSearchQuery('');
        setSearchResults([]);
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
      });
  }

  return (
    <>
      <div className="container mt-6">

        <h2 className="title is-3">Search Players</h2>

        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search for an NHL player..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="box">
            {searchResults.map((player) => (
              <button
                className="button is-dark is-fullwidth has-text-left"
                key={player.playerId}
                onClick={() => selectPlayer(player)}
              >
                <strong>{player.name}</strong>
                <span className="ml-2">
                  {player.positionCode} - {player.teamAbbrev}
                </span>
              </button>
            ))}
          </div>
        )}

        <h2 className="title is-3 mt-6">Selected Players</h2>

          {selectedPlayers.map((player) => (
            <div className="column is-one-quarter" key={player.playerId}>
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      <div className="footer">
        <p>© 2026 LineIQ. All rights reserved.</p>

      </div>
    </>
  )
}

export default App;