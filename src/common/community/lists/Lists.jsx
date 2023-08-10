import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteList, getLists, useDelete } from '../../../api/lists';
import { useMutation, QueryClient } from '@tanstack/react-query';

const Lists = () => {
  const navigate = useNavigate();

  //쿼리!!!!!
  const { isLoading, isError, data } = useQuery(['lists'], getLists);

  console.log('data', data);

  /*
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }
  */

  // 쿼리!!
  // 전역역
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  const orderedData = data?.sort((a, b) => new Date(b.time) - new Date(a.time));

  console.log('ordered', orderedData);
  //scroll
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <br />
        {orderedData?.map((item) => {
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
              <span>{item.time}</span>
              <br />
              <button
                onClick={() => {
                  mutation.mutate(item.id);
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
        <br />
        <button
          onClick={() => {
            MoveToTop();
          }}
        >
          스크롤up
        </button>
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

export default Lists;
