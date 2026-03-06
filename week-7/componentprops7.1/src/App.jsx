import llamaImage from "./assets/llama.jpg";
import alpacaImage from "./assets/alpaca.jpg";
import Camelid from "./components/Camelid";

function App() {
  const camelidData = [
    {
      name: "Llama",
      trivia:
        "Llamas are intelligent, social camelids from South America that can carry up to 200 pounds, reach speeds of 35 mph, and communicate by humming.",
      imagePath: "./llama.jpg",
    },
    {
      name: "Alpaca",
      trivia:
        "Alpacas are highly social, gentle camelids from South America, renowned for their luxurious, hypoallergenic fleece and unique humming communication.",
      imagePath: "./alpaca.jpg",
    },
  ];

  return (
    <div>
      <h2>CAMELIDS</h2>
      <img src={llamaImage} />
      <Camelid name={camelidData[0].name} trivia={camelidData[0].trivia} />
      <img src={alpacaImage} />
      <Camelid name={camelidData[1].name} trivia={camelidData[1].trivia} />
    </div>
  );
}

export default App;
