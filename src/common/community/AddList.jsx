import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addList } from '../../redux/modules/lists';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { addList } from '../../api/lists';
//i
import moment from 'moment';

import { useMutation, QueryClient } from '@tanstack/react-query';
import Upload from './Upload';

const AddList = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  //시간
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log('time', nowTime);
  // 쿼리!!
  const queryClient = new QueryClient();

  const mutation = useMutation(addList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  const [newTitle, setNewTitle] = useState();
  const [newGuardian, setNewGuardian] = useState();
  const [newCompanionAnimal, setNewCompanionAnimal] = useState();
  const [newComments, setNewComments] = useState();

  //
  const onAddHandler = async () => {
    const newList = {
      title: newTitle,
      guardian: newGuardian,
      companionAnimal: newCompanionAnimal,
      comments: newComments,
      time: nowTime
    };
    mutation.mutate(newList);
    // dispatch(addList(newList));
    navigate('/community');
  };

  return (
    <>
      <ListsBox>
        <List>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onAddHandler();
            }}
          >
            <div>
              <img src="" alt="" />
            </div>
            <h1>
              이야기나눔:
              <input
                type="text"
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
            </h1>
            <div>
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
            </div>

            <p>
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
            </p>
            <button>등록하기</button>
          </form>
        </List>
      </ListsBox>
    </>
  );
};

const ListsBox = styled.div`
  margin-top: 150px;
  margin-left: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 50px 0 50px 0;

  border: 2px solid green;
`;

const List = styled.div`
  width: 700px;
  padding: 10px;
  border: 2px solid green;
`;

export default AddList;
