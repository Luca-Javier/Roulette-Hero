import { useState } from "react"
import MyWheel from "./components/MyWheel"
import useWheel from "./context/useWheel"
import {
  WHEEL_TAMPLATE_CRIT,
  WHEEL_TEMPLATE_BEGINNING,
} from "./wheelTemplates/wheelTemplates"

const Characters = ({}) => {
  const { handleSpin, configWheel } = useWheel()

  const handleCharacter = async () => {
    configWheel(WHEEL_TEMPLATE_BEGINNING)
    const result = await handleSpin(1)
  }

  const handleCrit = async () => {
    configWheel(WHEEL_TAMPLATE_CRIT)
    const result = await handleSpin(1)
  }

  return (
    <>
      <MyWheel />

      <button onClick={handleCharacter}>Spin</button>
      <button onClick={handleCrit}>Crit</button>
      <div>Character</div>
    </>
  )
}
export default Characters
