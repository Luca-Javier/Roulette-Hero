import UserStats from "./sections/userStats"

const InteractivePlayerUI = ({}) => {
  return (
    <section className="interactive-player-ui">
      <article className="interactive-sections">
        <div className="isActive">1</div>
        <div>2</div>
      </article>
      <article className="interactive-per-section">
        <UserStats />
        {/* sections/UserStat
          sections/backpag
        
        */}
      </article>
    </section>
  )
}
export default InteractivePlayerUI
