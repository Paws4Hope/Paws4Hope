import * as S from './AddList.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addList } from '../../../api/lists';
import moment from 'moment';

import { useMutation, QueryClient } from '@tanstack/react-query';
import Upload from '../Upload';

const AddList = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // 시간
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log('time', nowTime);
  // 쿼리!!
  const queryClient = new QueryClient();

  const mutation = useMutation(addList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  // useInput으로 코드 변경하면 좋을거 같아요!
  const [{ title, guardian, companionAnimal, comments }, onChange, reset] = useInput('');

  // const [newTitle, setNewTitle] = useState();
  // const [newGuardian, setNewGuardian] = useState();
  // const [newCompanionAnimal, setNewCompanionAnimal] = useState();
  // const [newComments, setNewComments] = useState();

  const onAddHandler = async () => {
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
      <S.contentForm
        onSubmit={(e) => {
          e.preventDefault();
          onAddHandler();
        }}
      >
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
          comments:
          <br></br>
          <input
            name=""
            id=""
            cols="80"
            rows="20"
            value={newComments}
            onChange={(e) => {
              setNewComments(e.target.value);
            }}
          ></input>
        </S.DescriptionWrapper>
        <button>등록하기</button>
      </S.contentForm>
    </>
  );
};

export default AddList;
