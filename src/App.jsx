import { WelcomeScreen } from "./WelcomeScreen"
import Silhouette from "./Games/Silhouette/Silhouette.jsx";

export default function App() {
  return (
    <div>
      <WelcomeScreen/>
        <Silhouette onCompleted={() => alert("🎉 Puzzle Completed!")} />
    </div>
  )
}
