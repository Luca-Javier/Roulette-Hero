import React from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import getMessage from "../../helpers/getMessage"

const MainDisplay = () => {
  //Imports
  const { event, customEventMessage } = useSelector(state => state.event)

  //States
  const [messagesHistory, setMessagesHistory] = useState([])

  //Effects
  useEffect(() => {
    const message = getMessage(event)

    if (!(message === undefined))
      setMessagesHistory([...messagesHistory, message])
  }, [event])

  useEffect(() => {
    if (!customEventMessage) return undefined

    setMessagesHistory([...messagesHistory, customEventMessage])
  }, [customEventMessage])

  return (
    <section className="texts-display">
      <ul>
        {messagesHistory.length !== 0 &&
          messagesHistory.map((message, i) => <li key={i}>{message}</li>)}
      </ul>
    </section>
  )
}

export default MainDisplay
