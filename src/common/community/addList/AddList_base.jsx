import * as S from './AddList.styled';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addList } from '../../../redux/modules/lists';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import useInput from '../../../hooks/useInput';
import { Button } from '../../../components';

const AddList = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [newTitle, setNewTitle] = useState();
  // const [newGuardian, setNewGuardian] = useState();
  // const [newCompanionAnimal, setNewCompanionAnimal] = useState();
  // const [newComments, setNewComments] = useState();

  const [{ title, guardian, companionAnimal, comments }, onChange, reset] = useInput('');

  const onAddHandler = async () => {
    const newList = {
      title,
      guardian,
      companionAnimal,
      comments
    };

    dispatch(addList(newList));
    navigate('/community');
  };

  return (
    <>
      <S.contentForm
        onSubmit={(e) => {
          e.preventDefault();
          onAddHandler();
        }}
      >
        <S.TitleWrapper>
          <S.InputTitle placeholder="제목을 입력하세요" name="title" value={title} onChange={onChange} />
        </S.TitleWrapper>

        <S.Line />
        {/* <div>
          <span>
            보호자:
            <input type="text" name="guardian" value={guardian} onChange={onChange} />
          </span>

          <span>
            반려동물:
            <input type="text" name="companionAnimal" value={companionAnimal} onChange={onChange} />
          </span>
        </div> */}

        <S.DescriptionWrapper>
          <S.UtilImage className="material-symbols-outlined">image</S.UtilImage>
          <S.InputDescription placeholder="내용을 입력하세요" name="comments" value={comments} onChange={onChange} />
        </S.DescriptionWrapper>

        <S.BottomAppBar>
          <S.AppBarInner>
            <Button variant="textIcon" color="gray">
              <span className="material-symbols-outlined">west</span>
              나가기
            </Button>
            <S.ButtonWrapper>
              <Button>임시저장</Button>
              <Button variant="solid" color="black">
                등록하기
              </Button>
            </S.ButtonWrapper>
          </S.AppBarInner>
        </S.BottomAppBar>
      </S.contentForm>
    </>
  );
};

export default AddList;
