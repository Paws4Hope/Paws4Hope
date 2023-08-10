import * as S from './AddList.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addList } from '../../../api/lists';
import moment from 'moment';
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
import Upload from '../Upload';
import useInput from '../../../hooks/useInput';
import { Button } from '../../../components';

const AddList = () => {
  const navigate = useNavigate();
  // 시간
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const queryClient = new QueryClient();

  const mutation = useMutation(addList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  // useInput을 활용하면 좋을거 같아요!
  const [{ title, guardian, companionAnimal, comments }, onChange] = useInput('');

  // const [newTitle, setNewTitle] = useState();
  // const [newGuardian, setNewGuardian] = useState();
  // const [newCompanionAnimal, setNewCompanionAnimal] = useState();
  // const [newComments, setNewComments] = useState();

  const onAddHandler = async (e) => {
    e.preventDefault();

    const newList = {
      title,
      guardian,
      companionAnimal,
      comments,
      time: nowTime
    };
    mutation.mutate(newList);
    navigate('/community');
  };

  return (
    <>
      <S.contentForm onSubmit={onAddHandler}>
        {/* input 태그 useInput 형태로 변경했어요! */}
        <S.TitleWrapper>
          <S.InputTitle placeholder="제목을 입력하세요" name="title" value={title} onChange={onChange} />
        </S.TitleWrapper>
        <S.Line />

        {/* 글 작성, 수정은 본인만 가능하다보니 조회 쪽에서 보여주면 좋지 않을까(?) 싶습니다! */}
        {/* <div>
          <span>
            보호자:{' '}
            <input
              type="text"
              value={newGuardian}
              onChange={(e) => {
                setNewGuardian(e.target.value);
              }}
            />
          </span>

          <span>
            반려동물:{' '}
            <input
              type="text"
              value={newCompanionAnimal}
              onChange={(e) => {
                setNewCompanionAnimal(e.target.value);
              }}
            />
          </span>
          <Upload />
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
