// CharacterDetails.js
import React from 'react';

function CharacterDetails({ character }) {
  return (
    <div className="character-details">
      <div>
        <p><strong>First Name:</strong> {character.firstname}</p>
        <p><strong>Last Name:</strong> {character.lastname}</p>
        <p><strong>Age:</strong> {character.age}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Birthday:</strong> {character.birthday}</p>
        <p><strong>Skill:</strong> {character.skill}</p>
        <p><strong>Height:</strong> {character.height}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{character.description}</p>
      </div>
    </div>
  );
}

export default CharacterDetails;
 