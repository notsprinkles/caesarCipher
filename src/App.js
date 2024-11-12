import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState("");

  // Caesar cipher encryption function
  const caesarCipher = (str, shift) => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const base = char.charCodeAt(0) < 97 ? 65 : 97;
      return String.fromCharCode(
        ((char.charCodeAt(0) - base + shift) % 26) + base
      );
    });
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
  };

  const handleEncrypt = () => {
    const encrypted = caesarCipher(inputText, shift);
    setEncryptedText(encrypted);
  };

  return (
    <div className="App">
      <h1>Super Secret Journal</h1>
      <textarea
        placeholder="Enter your text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Enter shift value"
        value={shift}
        onChange={handleShiftChange}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <div className="encrypted-text">{encryptedText}</div>
    </div>
  );
}

export default App;
