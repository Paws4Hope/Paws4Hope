import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editList } from '../../redux/modules/lists';
import { styled } from 'styled-components';

const EditList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log('id', id);

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const targetList = lists.find((item) => {
    return item.id === id;
  });

  console.log('targetList', targetList);
  //
  const [editTitle, setEditTitle] = useState(targetList.title);
  const [editGuardian, setEditGuardian] = useState(targetList.guardian);
  const [editCompanionAnimal, setEditCompanionAnimal] = useState(targetList.companionAnimal);
  const [editComments, setEditComments] = useState(targetList.comments);

  //

  const onEditHandler = () => {
    const editedList = {
      id: targetList.id,
      img: '',
      title: editTitle,
      guardian: editGuardian,
      companionAnimal: editCompanionAnimal,
      comments: editComments
    };
    dispatch(editList(editedList));
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 20px;
  border: 2px solid green;
`;

const List = styled.div`
  width: 700px;
  padding: 10px;
  border: 2px solid green;
`;

export default EditList;
