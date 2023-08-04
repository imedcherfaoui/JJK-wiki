import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterPage from "./pages/Character/CharacterPage";
import DetailCharacterPage from "./pages/Character/DetailCaractere";
import useFetchData from "./database";
import Home from "./pages/Home/Home";

function App() {

  const [selectedChampion, setSelectedChampion] = useState(null);
  const { data: characters, loading, error } = useFetchData('http://localhost:3000/characters');
  //Ici rajouter le chargement des donnee dans une use effecte gerer aussi le loading et eroor

  return (
    <>
      <div className="layout">
        <NavBar characters={characters} setSelectedChampion={setSelectedChampion}/>
        <Routes>
          <Route 
            path="/"
            element={<Home setSelectedChampion={setSelectedChampion} characters={characters}/>}
          />
          <Route
            path="/characters"
            element={<CharacterPage characters={characters}/>}
          />
          <Route
            path="/characters/:id"
            element={<DetailCharacterPage selectedChampion={selectedChampion} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
