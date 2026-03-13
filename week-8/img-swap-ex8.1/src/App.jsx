import { useState } from 'react'
import './App.css'

function App() {
  const [llamaPic, setLlamaPic] = useState (0);
  const [alpacaPic, setAlpacaPic] = useState (0);
  return (
    <>
      <h1> Choose your camelid!</h1>
      <div>
        Llama <button onClick={() => {
          setLlamaPic(llamaPic +1);
        }}>Llamas Rule!</button>
      </div>
      <div>
        Alpaca <button onClick={() => {
          setAlpacaPic(alpacaPic +1);
        }}>Alpaca Rule!</button>
      </div>
      <div>
        <h2>Camelid favorites</h2>
        Llamas {llamaPic}  VS Alpacas {alpacaPic}

      </div>
    </>
  );
}

export default App
