import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterPage from "./pages/Character/CharacterPage";
import gojoImage from "./images/gojo.png";
import megumiImage from "./images/megumi.png";
import sukunaImage from "./images/sukuna.png";
import yujiImage from "./images/yuji.png";
import kenjakuImage from "./images/kenjaku.png";
import useFetchData from "./database";
import Home from "./pages/Home/Home";

function App() {
  const { data: characters, loading, error } = useFetchData('http://localhost:3000/characters');

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  const handleCharacterSelect = (firstname) => {
    const selected = characters.find((character) => character.firstname === firstname);
    setSelectedCharacter(selected);
  };

  useEffect(() => {
    // Update selectedCharacter when characters data changes
    setSelectedCharacter(characters[0]);
  }, [characters]);

  const characterImages = {
    "Satoru": gojoImage,
    "Megumi": megumiImage,
    "Sukuna": sukunaImage,
    "Yuji": yujiImage,
    "Kenjaku": kenjakuImage,
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render an error message
  }

  return (
    <>
      <div className="layout">
        <NavBar characters={characters} onCharacterSelect={handleCharacterSelect} />
        <Routes>
          <Route path="/" element={<Home characters={characters} onCharacterSelect={handleCharacterSelect} />} />
          <Route
            path="/characters/:firstname"
            element={<CharacterPage character={selectedCharacter} characterImages={characterImages} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
