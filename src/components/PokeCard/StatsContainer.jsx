/* eslint-disable react/prop-types */
const StatsContainer = ({ stats }) => {
  return (
    <div className="stats-card">
      {stats.map((statObj) => (
        <div className="stat-item" key={statObj?.stat.name}>
          <p>{statObj?.stat.name.replaceAll('-', ' ')}</p>
          <h4>{statObj?.base_stat}</h4>
        </div>
      ))}
    </div>
  )
}

export default StatsContainer 