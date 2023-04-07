import { useEffect } from "react"
import MyWheel from "./components/MyWheel"
import useWheel from "./context/useWheel"
import { WHEEL_TEMPLATE_BEGINNING } from "./wheelTemplates/wheelTemplates"

const Characters = ({}) => {
  const { handleSpin, configWheel, spin } = useWheel()

  const config = WHEEL_TEMPLATE_BEGINNING
  useEffect(() => {
    configWheel(config)
  }, [])

  const handleCharacter = async () => {
    configWheel(config)
    const result = await handleSpin(1)
    console.log(result)
  }

  return (
    <>
      {<MyWheel />}

      <button onClick={handleCharacter}>Spin</button>
      <div>Character</div>
    </>
  )
}
export default Characters
