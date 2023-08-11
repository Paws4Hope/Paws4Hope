import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSurveys } from '../../redux/modules/surveys';
import Survey1 from './Survey1';
import Survey2 from './Survey2';
import Survey3 from './Survey3';
import Survey4 from './Survey4';
import { changeDialog } from '../../redux/modules/dialog';

const Modal = () => {
  const dispatch = useDispatch();
  const dialog = useSelector((state) => state.dialog);

  return (
    <div>
      <ModalContainer>
        <ModalBox>
          {(dialog == 1 && <Survey1 />) ||
            (dialog == 2 && <Survey2 />) ||
            (dialog == 3 && <Survey3 />) ||
            (dialog == 4 && <Survey4 />)}
        </ModalBox>
      </ModalContainer>
    </div>
  );
};

const ModalBox = styled.div`
  width: 1500px;
  height: 1800px;
  border: 4px solid black;
  background-color: white;
  position: fixed;
  top: 180px;
  left: 1000px;
  opacity: 1;
  font-size: 2rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* opacity: 0.3; */
  background-color: #80808060;
`;

export default Modal;
