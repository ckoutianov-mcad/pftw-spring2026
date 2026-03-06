import Camelid from "./components/Camelid";
 
import './App.css'

function App() {
const camelidData = [
  {name: "Llama",
  trivia: "Cute Llamas vs. Alpacas: Facts and a DebateLlamas are intelligent, social camelids from South America that can carry up to 200 pounds, reach speeds of 35 mph, and communicate by humming."
  },

  {name: "Alpaca",
  trivia: "Alpacas are highly social, gentle camelids from South America, renowned for their luxurious, hypoallergenic fleece and unique humming communication."
  }
]

  return (
    <>
      <div> 
        <h2>CAMELIDS</h2>
        <Camelid 
        name={camelidData[0].name}
        />
      </div>
  
    </>
  )
}

export default App
