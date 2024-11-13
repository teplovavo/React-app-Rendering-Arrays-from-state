

import React from 'react';
import Score from './Score'; // Importing Score component

function Learner({ name, bio, scores }) {
  return (
    <div className="learner"> 
      <h2>{name}</h2> {/* Render learner's name */}
      <p>{bio}</p> {/* Render learner's bio */}
      <div className="scores">
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;
