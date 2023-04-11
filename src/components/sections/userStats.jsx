const UserStats = ({}) => {
  return (
    <section className="flex between">
      <article>
        <ul className="list-icons">
          <li className="stat-icon health">150</li>
          <li className="stat-icon shield">150</li>
          <li className="stat-icon attack">10</li>
          <li className="stat-icon karma">10</li>
          <li className="stat-icon lucky">10</li>
        </ul>
      </article>
      <article className="stats-equipment-container">
        <div className="stat-equipment helmet"></div>
        <div className="stat-equipment left-hand"></div>
        <div className="stat-equipment chestplate"></div>
        <div className="stat-equipment right-hand"></div>
        <div className="stat-equipment pants"></div>
        <div className="stat-equipment left-shoe"></div>
        <div className="stat-equipment right-shoe"></div>
      </article>
    </section>
  )
}
export default UserStats
