import React from 'react';

function InterestButton({ animalId, isInterested, toggleInterest }) {
  return <button onClick={() => toggleInterest(animalId)}>{isInterested ? '관심 해제' : '관심'}</button>;
}

export default InterestButton;
