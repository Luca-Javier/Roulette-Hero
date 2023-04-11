const UserStats = ({}) => {
  const headSrc = "/src/assets/equipment/head.svg",
    handSrc = "/src/assets/equipment/hand.svg",
    chestSrc = "/src/assets/equipment/chest.svg",
    pantSrc = "/src/assets/equipment/pantalones.svg",
    footSrc = "/src/assets/equipment/foots.svg"

  const headAlt = "head equipment",
    handAlt = "hand equipment",
    chestAlt = "chestplate",
    pantAlt = "pants equipment",
    footAlt = "foot equipment"

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
        <div className="flex justify-center">
          <img src={headSrc} alt={headAlt} />
        </div>
        <div className="flex gap-05">
          <img src={handSrc} alt={handAlt} />
          <img src={chestSrc} alt={chestAlt} />
          <img src={handSrc} alt={handAlt} />
        </div>
        <div className="flex justify-center">
          <img src={pantSrc} alt={pantAlt} />
        </div>
        <div className="flex gap-05 justify-center">
          <img src={footSrc} alt={footAlt} />
          <img src={footSrc} alt={footAlt} />
        </div>
      </article>
    </section>
  )
}
export default UserStats
