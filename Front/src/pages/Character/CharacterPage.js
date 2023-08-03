import React from "react";
import "./CharacterPage.css";
import CharacterDetails from "./components/CharacterDetails";

function CharacterPage({ character, characterImages }) {
  const pageStyle = {
    background: `url(${characterImages[character?.firstname] || ""})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const mobileStyle = {
    ...pageStyle,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div style={pageStyle} className="desktop-image"></div>
      <div style={mobileStyle} className="mobile-image"></div>
      <div style={{ height: "1500px", background: "lightgray", padding: "20px" }}>
        <h2>Character Details</h2>
        {character && <CharacterDetails character={character} />}
      </div>
    </div>
  );
}

export default CharacterPage;
