import { useEffect, useState } from 'react'
import './App.css'
import PlayerCard from './playerCard'

const forwardPositions = ['LW', 'C', 'RW']
const defencePositions = ['LD', 'RD']

const rosterConfig = {
  forwards: {
    title: 'Forward Lines',
    count: 4,
    positions: forwardPositions,
    label: 'LINE',
    total: 12,
  },
  defence: {
    title: 'Defence Pairings',
    count: 3,
    positions: defencePositions,
    label: 'PAIRING',
    total: 6,
  }
}

const positonalLabels = {
  LW: 'LEFT WING',
  RW: 'RIGHT WING',
  C: 'CENTER',
  LD: 'LEFT DEFENCE',
  RD: 'RIGHT DEFENCE',
}

function createLineup(count, positions) {
  return Array.from({ length: count }, (_, index) =>
    positions.map(position => ({
      id: `${position}${index + 1}`,
      player: null,
    })),
  ).flat()
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [activeView, setActiveView] = useState('forwards')
  const [lineup, setLineup] = useState([
    ...createLineup(4, forwardPositions),
    ...createLineup(3, defencePositions)
  ])
  const [selectedSlot, setSelectedSlot] = useState(null)

  const config = rosterConfig[activeView]

  const activeLineup = lineup.filter(slot => config.positions.some(
    position => slot.id.startsWith(position) && slot.id.slice(position.length).match(/^\d+$/)
  ))
  const filledSlots = activeLineup.filter(slot => slot.player).length

  useEffect(() => {
    if (!searchQuery.trim()) return

    const timeout = setTimeout(() => {
      fetch(`http://localhost:8080/player/search/${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(setSearchResults)
        .catch(error => console.error('Error searching for players:', error))
    }, 200)

    return () => clearTimeout(timeout)
  }, [searchQuery])

  function changeView(view) {
    setActiveView(view)
    setSelectedSlot(null)
    setSearchQuery('')
    setSearchResults([])
  }

  function selectPlayer(player) {
    if (selectedSlot === null) return

    fetch(`http://localhost:8080/player/${player.playerId}`)
      .then(response => response.json())
      .then(data => {
        setLineup(current =>
          current.map(slot =>
            slot.id === selectedSlot
              ? { ...slot, player: data }
              : slot),
        )
        setSelectedSlot(null)
        setSearchQuery('')
        setSearchResults([])
      })
      .catch(error => console.error('Error fetching player data:', error))
  }

  function handleSearchKeyDown(event) {
    if (event.key === 'Enter' && searchResults.length > 0) selectPlayer(searchResults[0])
  }

  function handleSearchChange(event) {
    const value = event.target.value
    setSearchQuery(value)
    if (!value.trim()) setSearchResults([])
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="LineIQ home">
          <span className="brand-mark">LQ</span>
          <span>Line<span>IQ</span></span>
        </a>
        <div className="season-pill">
          <span className="live-dot" /> 2026 season
        </div>
      </header>

      <main className="page-content">
        <section className="intro">
          <div>
            <p className="eyebrow">ROSTER BUILDER <span>•</span> NHL</p>
            <h1>Build your <em>perfect</em> lines.</h1>
            <p className="intro-copy">Explore the league, compare careers, and arrange your ideal forward group.</p>
          </div>
          <div className="lineup-progress">
            <span className="progress-number">{String(filledSlots).padStart(2, '0')}</span>
            <span className="progress-label">/ {config.total} spots filled</span>
            <div className="progress-track"><span style={{ width: `${(filledSlots / config.total) * 100}%` }} /></div>
          </div>
        </section>

        <section className="workspace">
          <div className="search-panel">
            <div className="panel-heading">
              <span className="panel-icon">+</span>
              <div>
                <h2>Add a player</h2>
                <p>{selectedSlot ? `Adding to ${selectedSlot}` : 'Select a position below to get started'}</p>
              </div>
            </div>
            <div className="search-wrap">
              <span className="search-icon">⌕</span>

              <input
                className="player-search"
                type="text"
                placeholder={selectedSlot ? `Search players for ${selectedSlot}...` : 'Click a position first...'}
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
            {!selectedSlot && <p className="helper-text">Tip: click any open position on the right.</p>}
          </div>

          {searchResults.length > 0 && (
            <div className="search-results">
              <p className="results-label">PLAYER RESULTS</p>
              {searchResults.map(player => (
                <button className="result-row" key={player.playerId} onClick={() => selectPlayer(player)}>
                  <span className="result-avatar">{player.name?.charAt(0)}</span>
                  <span className="result-name"><strong>{player.name}</strong><small>{player.positionCode} · {player.teamAbbrev}</small></span>
                  <span className="result-arrow">↗</span>
                </button>
              ))}
            </div>
          )}

          <nav className="roster-nav" aria-label="Roster Navigation">
            <button
              type="button"
              className={`roster-nav-item ${activeView === 'forwards' ? 'active' : ''
                }`}
              onClick={() => changeView('forwards')}
              aria-current={activeView === 'forwards' ? 'page' : undefined}
            >
              Forward Lines
            </button>

            <button
              type="button"
              className={`roster-nav-item ${activeView === 'defence' ? 'active' : ''
                }`}
              onClick={() => changeView('defence')}
              aria-current={activeView === 'defence' ? 'page' : undefined}
            >
              Defence Pairings
            </button>
          </nav>

          <div className="lineup-section">
            <div className="section-heading">
              <div><p className="eyebrow">YOUR ROSTER</p><h2>{config.title}</h2></div>

              <span className="line-count">
                {config.count} {activeView === 'forwards' ? 'LINES' : 'PAIRINGS'}
                <span> • </span>
                {config.total} POSITIONS
              </span>
            </div>
            <div className="lineup">
              {Array.from(
                { length: config.count },
                (_, index) => index + 1,
              ).map(lineNumber => (
                <div className="line" key={`${activeView}-${lineNumber}`}>
                  <div className="line-label">
                    <span>0{lineNumber}</span>
                    <strong>
                      {config.label} {lineNumber}
                    </strong>
                  </div>

                  <div
                    className={`line-slots ${activeView === 'defence' ? 'defence-slots' : ''
                      }`}
                  >
                    {config.positions.map(position => {
                      const slotId = `${position}${lineNumber}`

                      const slot = lineup.find(
                        lineupSlot => lineupSlot.id === slotId,
                      )

                      const isSelected = selectedSlot === slotId

                      return (
                        <div
                          key={slotId}
                          className={`lineup-slot ${isSelected ? 'selected-slot' : ''
                            }`}
                          onClick={() => setSelectedSlot(slotId)}
                        >
                          {slot.player ? (
                            <PlayerCard
                              player={slot.player}
                            />
                          ) : (
                            <div className="empty-slot">
                              <span className="slot-plus">+</span>
                              <span>{positonalLabels[position]}</span>
                              <small>{slotId}</small>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>LINEIQ</span> · Build smarter lines
      </footer>
    </div>
  )
}

export default App