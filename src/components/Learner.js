

import React from 'react';
import Score from './Score'; // Importing Score component

function Learner({ name, bio, scores }) {
  return (
    <div>
      <h2>{name}</h2> {/* Render learner's name */}
      <p>{bio}</p> {/* Render learner's bio */}
      <h3>Scores:</h3>
      {/* Map over scores array to render each Score component */}
      {scores.map((score, index) => (
        <Score key={index} date={score.date} score={score.score} />
      ))}
    </div>
  );
}

export default Learner;
