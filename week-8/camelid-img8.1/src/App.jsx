import { useState } from 'react'
import defaultImage from "./assets/alpacas-vs-llamas.jpg";
import llamaImage from "./assets/llama-img.jpg";
import alpacaImage from "./assets/alpaca-img.jpg";
import './App.css'

function App() {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  return (
    <>
  <h1>Choose your Camelid!</h1>
  <div> <img src={currentImage} alt="Alpaca Vs Llama" /></div>

  <div> <button onClick={() => setCurrentImage(llamaImage)}>Llama</button></div>
  | 
  <div> <button onClick={() => setCurrentImage(alpacaImage)}>Alpaca</button></div>
    </>
  );
}

export default App
