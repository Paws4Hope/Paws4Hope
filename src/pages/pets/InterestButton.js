import * as S from './Pets.styled';
import React, { useState } from 'react';
import IconInterest from '../../assets/images/ico_interest.svg';

function InterestButton({ animalId, isInterested, toggleInterest }) {
  // 관심 클릭
  const [isClicked, setIsClicked] = useState(false);
  const toggleClassName = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.ButtonInterest
      className={`${isClicked ? 'active' : ''}`}
      onClick={() => {
        toggleInterest(animalId);
        toggleClassName();
      }}
    >
      {isInterested ? <img src={IconInterest} /> : <img src={IconInterest} />}
    </S.ButtonInterest>
  );
}

export default InterestButton;
