import GameHeader from "./components/GameHeader"
import InteractiveButtons from "./components/InteractiveButtons"
import InteractivePlayerUI from "./components/InteractivePlayerUI"
import MainDisplay from "./components/MainDisplay"

const Playing = ({}) => {
  return (
    <div>
      <GameHeader />
      <MainDisplay />
      <InteractivePlayerUI />
      <InteractiveButtons />
    </div>
  )
}
export default Playing
