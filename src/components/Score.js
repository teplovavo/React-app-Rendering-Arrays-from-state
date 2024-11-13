

import React from 'react';

function Score({ date, score }) {
  return (
    <div>
      {/* Render each score's date and score */}
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default Score;
