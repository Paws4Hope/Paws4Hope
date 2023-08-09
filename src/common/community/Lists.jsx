import React, { useEffect } from 'react';
import { deleteList } from '../../redux/modules/lists';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Lists = () => {
  const lists = useSelector((state) => state.lists);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  const onDeleteHandler = (id) => {
    dispatch(deleteList(id));
  };

  //
  const getLists = async () => {
    const querySnapshot = await getDocs(collection(db, 'lists'));
    querySnapshot.forEach((doc) => {
      // 가져온 모든 문서들을 확인
      console.log(doc.id, ' => ', doc.data());
    });
    console.log('querySnapshot', querySnapshot);
    return querySnapshot;
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <ListsBox>
        <button
          onClick={() => {
            navigate('/community/post');
          }}
        >
          추가
        </button>
        {lists?.map((item) => {
          return (
            <List key={item.id}>
              <div>
                <img src="" alt="" />
              </div>
              <h1>{item.title}</h1>
              <div>
                <span>보호자: {item.guardian}</span>
                <br />
                <span>반려동물: {item.companionAnimal}</span>
              </div>

              <p>{item.comments}</p>
              <button
                onClick={() => {
                  onDeleteHandler(item.id);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  navigate(`/community/edit/${item.id}`);
                }}
              >
                수정
              </button>
            </List>
          );
        })}
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

export default Lists;
