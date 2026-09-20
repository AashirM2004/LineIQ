import { useEffect, useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css';
import PlayerCard from './playerCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // 4 lines, 3 forward positions per line
  const [lineup, setLineup] = useState([
    { id: 'LW1', player: null },
    { id: 'C1', player: null },
    { id: 'RW1', player: null },

    { id: 'LW2', player: null },
    { id: 'C2', player: null },
    { id: 'RW2', player: null },

    { id: 'LW3', player: null },
    { id: 'C3', player: null },
    { id: 'RW3', player: null },

    { id: 'LW4', player: null },
    { id: 'C4', player: null },
    { id: 'RW4', player: null }
  ]);

  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(
        `http://localhost:8080/player/search/${encodeURIComponent(searchQuery)}`
      )
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
    if (selectedSlot === null) {
      return;
    }

    fetch(`http://localhost:8080/player/${player.playerId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setLineup(prevLineup =>
          prevLineup.map(slot =>
            slot.id === selectedSlot
              ? { ...slot, player: data }
              : slot
          )
        );

        setSelectedSlot(null);
        setSearchQuery('');
        setSearchResults([]);
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
      });
  }

  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && searchResults.length > 0) {
      selectPlayer(searchResults[0]);
    }
  }

  return (
    <>
      <div className="lineup-container mt-6">
        <h2 className="title is-3">Search Players</h2>

        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder={
                selectedSlot
                  ? `Select a player for ${selectedSlot}...`
                  : 'Click a lineup position first...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="box search-results">
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

        <div className="lineup">

          {[1, 2, 3, 4].map(lineNumber => (
            <div className="line" key={lineNumber}>

              <h3>Line {lineNumber}:</h3>

              <div className="line-slots">

                {['LW', 'C', 'RW'].map(position => {
                  const slotId = `${position}${lineNumber}`;

                  const slot = lineup.find(
                    lineupSlot => lineupSlot.id === slotId
                  );

                  const isSelected = selectedSlot === slotId;

                  return (
                    <div
                      key={slotId}
                      className={`lineup-slot ${isSelected ? 'selected-slot' : ''
                        }`}
                      onClick={() => setSelectedSlot(slotId)}
                    >

                      {slot.player ? (
                        <PlayerCard player={slot.player} />
                      ) : (
                        <div className="empty-slot">
                          {slotId}
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            </div>
          ))}

        </div>

      </div>

      <div className="footer">
        <p>© 2026 LineIQ. All rights reserved.</p>
      </div>
    </>
  )
}

export default App;