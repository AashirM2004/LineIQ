

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
  const teamColor =
    teamColors[player.currentTeamAbbrev] || "#64748b";

  const stats = player.careerTotals?.regularSeason ?? player;

  return (
    <div
      className="player-card"
      style={{ "--team-color": teamColor }}
    >
      <div className="player-card-content">
        <div className="player-headshot">
          {player.headshot && (
            <img
              src={player.headshot}
              alt={`${player.firstName} ${player.lastName}`}
            />
          )}
        </div>

        <div className="player-info">
          <div className="player-first-name">
            {player.firstName}
          </div>
          <div className="player-last-name">
            {player.lastName}
          </div>

          <div className="player-badges">
            <span className="player-position">
              {player.position}
            </span>
            <span className="player-age">
              Age {player.age ?? "—"}
            </span>
          </div>
        </div>

        <div className="player-branding">
          {player.teamLogo && (
            <img
              className="team-logo-image"
              src={player.teamLogo}
              alt={player.currentTeamAbbrev}
            />
          )}

          <span className="player-number">
            #{player.sweaterNumber ?? "—"}
          </span>
        </div>
      </div>

      <div className="player-stats">
        {[
          ["GP", stats.gamesPlayed],
          ["G", stats.goals],
          ["A", stats.assists],
          ["PTS", stats.points]
        ].map(([label, value]) => (
          <div
            className={`player-stat ${
              label === "PTS" ? "points-stat" : ""
            }`}
            key={label}
          >
            <span className="stat-label">{label}</span>
            <span className="stat-value">
              {value ?? "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerCard;
