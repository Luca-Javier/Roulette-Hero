import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItemInfo } from "../../../reducers/eventReducer"

function Backpag({ setSection, sections }) {
  //Imports
  const { backpag } = useSelector(state => state.player)
  const dispatch = useDispatch()

  //Event
  const showItemInfo = item => {
    dispatch(setItemInfo(item))
    setSection(sections.itemInfo)
  }

  return (
    <section className="p-1 flex flex-wrap gap-1">
      {backpag.map((item, i) => (
        <img
          onClick={() => showItemInfo(item)}
          title={item.alt}
          alt={item.alt}
          key={i}
          src={item.src}
          className={`quality ${item.quality}`}
          style={{ width: 35 }}
        />
      ))}
    </section>
  )
}

export default Backpag
