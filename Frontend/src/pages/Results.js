import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { analysisResults } = location.state || {};

  return (
    <div>
      <h2>Your Skin Analysis Results</h2>
      {analysisResults ? (
        <div>
          <p>{analysisResults}</p>
        </div>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
}

export default Results;