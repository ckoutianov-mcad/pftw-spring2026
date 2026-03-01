import llama from './assets/llama.jpg';
import './App.css'

function App() {
  const  llamaFacts = [
    "Llamas only feed on grass and other plants.",
    "Llamas can carry up to 200 pounds.",
    "Llamas language is humming.",
    "Llamas stick their tongue out when angry.",
    "Llamas do not stick their tongue out when angry."
  ];
  const tongueOut = true;

  return (
    <>
      <div>
        <h1>Llama Facts 🦙</h1>
        <ul>
          <li>{llamaFacts[0]}</li>
          <li>{llamaFacts[1]}</li>
          <li>{llamaFacts[2]}</li>
          <li>{tongueOut ? llamaFacts[3] : llamaFacts[4]}</li>
        </ul>
      </div>
      <img src={llama} alt="South American llama" />;
      <p>Llama selfie from Machu Picchu 📷</p>
    </>
  );
}

export default App
