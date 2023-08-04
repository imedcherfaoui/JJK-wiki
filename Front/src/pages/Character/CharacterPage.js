import React from "react";
import "./CharacterPage.css";
import img from '../../images/megumi.png'

function CharacterPage({ character }) {
  const characters = Array(5).fill({
    name: "Ryomen Sukuna",
    category: "Fléaux",
    spell: "sort d'inversion",
    description: "dqsfdfgqdsfqdfsgqdgfdF",
  });

  return (
    <section className="category container">
    <div className="row justify-content-md-center mx-2">
    {characters.map((char, index) => (
          <div key={index} className="fiche col-12 col-md-6 mt-5">
            <div className="cercle"></div>
            <div className="content">
              <h2>{char.name}</h2>
              <p>Categorie : {char.category}</p>
              <p>Sort : {char.spell}</p>
              <p>{char.description}</p>
            </div>
            <img src={img} alt="dsfg"/>
          </div>
        ))}
    </div>
    </section>
  );
}

export default CharacterPage;
