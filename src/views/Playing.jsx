import GameHeader from "../components/playing/GameHeader"
import InteractiveButtons from "../components/playing/InteractiveButtons"
import InteractivePlayerUI from "../components/playing/InteractivePlayerUI"
import MainDisplay from "../components/playing/MainDisplay"

const Playing = ({}) => {
  return (
    <>
      <GameHeader />
      <MainDisplay />
      <InteractivePlayerUI />
      <InteractiveButtons />
    </>
  )
}
export default Playing
