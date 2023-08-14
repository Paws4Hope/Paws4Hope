import * as S from './Pets.styled';
import React, { useEffect, useState } from 'react';
import IconInterest from '../../assets/images/ico_interest.svg';

function InterestButton({ animal, isInterested, toggleInterest }) {
  // 관심 클릭
  const [isClicked, setIsClicked] = useState(isInterested);
  const toggleClassName = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.ButtonInterest
      className={`${isClicked ? 'active' : ''}`}
      onClick={() => {
        toggleInterest(animal);
        toggleClassName();
      }}
    >
      {isInterested ? <img src={IconInterest} /> : <img src={IconInterest} />}
    </S.ButtonInterest>
  );
}

export default InterestButton;
