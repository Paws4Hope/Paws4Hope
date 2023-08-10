import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteList, getLists, useDelete } from '../../../api/lists';
import { useMutation, QueryClient } from '@tanstack/react-query';

const Lists = () => {
  const navigate = useNavigate();

  //쿼리!!!!!
  const { isLoading, isError, data } = useQuery(['lists'], getLists);

  /*
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }
  */

  const queryClient = useQueryClient();

  const mutation = useMutation(deleteList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  });

  const orderedData = data?.sort((a, b) => new Date(b.time) - new Date(a.time));

  //scroll
  const MoveToTop = () => {
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
              <ImgBox>
                <img src="" alt="" />
              </ImgBox>
              <h1>{item.title}</h1>
              <div>
                <span>보호자: {item.guardian}</span>
                <br />
                <span>반려동물: {item.companionAnimal}</span>
              </div>

              <p>{item.comments}</p>
              <span>{item.time}</span>
              <br />
              <div>
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
              </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  padding: 10px;
  border: 2px solid green;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid pink;
  border-radius: 50%;
`;

export default Lists;
