import { useState } from "react";
import "./App.css";
import ButterflyComponent from "./ButterflyComponent";

function App() {
  //initial headline, with ability to update
  const [headline, setHeadline] = useState(
    "List of Butterflies",
  );
  // array of butterflies, with the ability to change 
  const [initialButterflies, setButterflies] = useState([
    "Brazilian Dynastor",
    "Tiger Swallowtail",
    "Blue Triangle",
    "Monarch",
    "Hewitson's Blue Hairstreak",
    "Purple Hairstreak",
    "Pirate Butterfly",
    "Julia",
    "Guava Skipper",
    "Large Blue"
  ]);
  // update headline - focus
  function focusHeadline(butterflyName) {
    setHeadline(butterflyName);
  }
  //returning every other butterly that does not match - delete
  function deleteButterfly(butterflyName) {
    const updatedArray = initialButterflies.filter((butterfly) => {
      return butterfly !== butterflyName;
   });
    setButterflies(updatedArray);
  } 
  // refesh button using DOM
  const refreshPage = () => {
    window.location.reload();
  }
 

  return (
    <>
      <h1>{`Focusing on ${headline} 🦋`}</h1>
      <button className="resetButton"onClick={refreshPage}>Reset List</button>
      {initialButterflies.map((loopButterfly) => {
        return (
          <ButterflyComponent
            key={loopButterfly}
            butterflyName={loopButterfly}
            clickFocus={focusHeadline}
            clickDelete={deleteButterfly}
          />
        );
      })}

    </>
  );
}

export default App;
