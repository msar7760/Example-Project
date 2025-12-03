// import { MqttContext, useMqttSubscribe } from "@artcom/mqtt-topping-react"
// import { useCallback, useContext, useState } from "react"

import { WelcomeScreen } from "./WelcomeScreen"
import Silhouette from "./Games/Silhouette/Silhouette.jsx";

export default function App() {
  // const [uuid] = useState(crypto.randomUUID().slice(0, 8))
  // const [message, setMessage] = useState(null)
  // const mqttClient = useContext(MqttContext)
  //
  // const handler = useCallback((message, topic) => {
  //   console.log(`Received ${topic}: ${message}`)
  //   setMessage(message)
  // }, [])
  //
  // useMqttSubscribe(`exhibition/users/+/currentStation`, handler)

  return (
    <div>
      <WelcomeScreen />
        <Silhouette onCompleted={() => alert("🎉 Puzzle Completed!")} />
        {/*not using mqtt here /}
      {/*<button*/}
      {/*  onClick={async () => {*/}
      {/*    const stationId = (Math.random() * 100).toFixed(0)*/}
      {/*    await mqttClient.publish(`exhibition/users/${uuid}/currentStation`, {*/}
      {/*      uuid,*/}
      {/*      stationId,*/}
      {/*    })*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Publish MQTT Message*/}
      {/*</button>*/}
      {/*{message && (*/}
      {/*  <p>*/}
      {/*    User: {message.uuid} is at station {message.stationId}*/}
      {/*  </p>*/}
      {/*)}*/}
    </div>
  )
}
