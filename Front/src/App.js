import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterPage from "./pages/Character/CharacterPage";
import gojoImage from "./images/gojo.png";
import megumiImage from "./images/megumi.png";
import sukunaImage from "./images/sukuna.png";
import useFetchData from "./database";
import Home from "./pages/Home/Home";

function App() {
  const { data: characters, loading, error } = useFetchData('http://localhost:3000/characters');

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  const handleCharacterSelect = (firstname) => {
    const selected = characters.find((character) => character.firstname === firstname);
    setSelectedCharacter(selected);
  };

  const characterImages = {
    "Satoru": gojoImage,
    "megumi": megumiImage,
    "sukuna": sukunaImage,
  };
  

  return (
    <>
      <div className="layout">
        <NavBar characters={characters} onCharacterSelect={handleCharacterSelect} />
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route
            path="/characters"
            element={<CharacterPage character={selectedCharacter} characterImages={characterImages} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
