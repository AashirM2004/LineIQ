const teamColors = {
  ANA: "#F47A38",
  BOS: "#FFB81C",
  BUF: "#003087",
  CGY: "#D2001C",
  CAR: "#CE1126",
  CHI: "#CF0A2C",
  COL: "#6F263D",
  CBJ: "#002654",
  DAL: "#006847",
  DET: "#CE1126",
  EDM: "#FF4C00",
  FLA: "#C8102E",
  LAK: "#111111",
  MIN: "#154734",
  MTL: "#AF1E2D",
  NSH: "#FFB81C",
  NJD: "#CE1126",
  NYI: "#F47D30",
  NYR: "#0038A8",
  OTT: "#DA1A32",
  PHI: "#F74902",
  PIT: "#000000",
  STL: "#002F87",
  SJS: "#006D75",
  SEA: "#99D9D9",
  TBL: "#002868",
  TOR: "#00205B",
  UTA: "#6CACE4",
  VAN: "#00205B",
  VGK: "#B4975A",
  WSH: "#C8102E",
  WPG: "#041E42"
};

function PlayerCard({ player }) {
    const teamColor = teamColors[player.currentTeamAbbrev];
  return (
        <div
      className="player-card"
      style={{ backgroundColor: teamColor }}
    >
  
      <div className="player-number">
            #{player.sweaterNumber}
      </div>

      <div className="player-info">
        <div className="player-name">
          {player.firstName} {player.lastName}
        </div>

        <div className="player-aav">
          $Contract AAV
        </div>

        <div className="player-age">
          Age: {player.age}
        </div>
      </div>

      <div className="player-position">
        {player.position}
      </div>

      <div className="team-abbrev">
        {player.currentTeamAbbrev}
      </div>

      <div className="team-logo">
        <img src={player.teamLogo} alt="Team Logo" />
      </div>

    </div>
  );
}

export default PlayerCard;