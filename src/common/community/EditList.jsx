import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { editList } from '../../redux/modules/lists';
import { styled } from 'styled-components';
import { getLists, updateList } from '../../api/lists';

import { useMutation, QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { editList } from '../../redux/modules/lists';

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log('id', id);

  // const dispatch = useDispatch();
  // const lists = useSelector((state) => state.lists);

  const { isLoading, isError, data } = useQuery(['lists'], getLists);

  const targetList = data.find((item) => {
    return item.id === id;
  });

  console.log('targetList', targetList);
  //
  const [editTitle, setEditTitle] = useState(targetList.title);
  const [editGuardian, setEditGuardian] = useState(targetList.guardian);
  const [editCompanionAnimal, setEditCompanionAnimal] = useState(targetList.companionAnimal);
  const [editComments, setEditComments] = useState(targetList.comments);

  //
  // 쿼리!!
  const queryClient = useQueryClient();

  const mutation = useMutation(updateList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  const onEditHandler = () => {
    const editedList = {
      title: editTitle,
      guardian: editGuardian,
      companionAnimal: editCompanionAnimal,
      comments: editComments
    };

    mutation.mutate({ targetId: targetList.id, editedList });

    // dispatch(editList(editedList));
  };

  return (
    <>
      <ListsBox>
        <List>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onEditHandler();
              navigate('/community');
            }}
          >
            <div>
              <img src="" alt="" />
            </div>
            <h1>
              이야기나눔:{' '}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            </h1>
            <div>
              <span>
                보호자:{' '}
                <input
                  type="text"
                  value={editGuardian}
                  onChange={(e) => {
                    setEditGuardian(e.target.value);
                  }}
                />
              </span>

              <span>
                반려동물:{' '}
                <input
                  type="text"
                  value={editCompanionAnimal}
                  onChange={(e) => {
                    setEditCompanionAnimal(e.target.value);
                  }}
                />
              </span>
            </div>

            <p>
              comments:
              <br></br>
              <input
                type="textarea"
                value={editComments}
                onChange={(e) => {
                  setEditComments(e.target.value);
                }}
                name=""
                id=""
                cols="80"
                rows="20"
              ></input>
            </p>
            <button>수정하기</button>
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

export default EditList;
