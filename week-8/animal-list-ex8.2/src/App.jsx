import { useState } from "react";
import "./App.css";

function App() {
  const [headline, setHeadline] = useState(
    "List of Butterflies",
  );
  // array of butterflies, with the ability to change those butterflies
  const [initialButterflies, setButterflies] = useState([
    "Brazilian Dynastor",
    "Tiger Swallowtail",
    "Blue Triangle",
    "Monarch",
    "Hewitson's Blue Hairstreak",
    "Purple Hairstreak",
    "Pirate Butterfly",
    "Julia"
  ]);
 

  return (
    <>
     <h1>🦋 {headline}</h1>
    </>
  );
}

export default App;
