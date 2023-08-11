import * as S from './Lists.styled';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteList, getLists, useDelete } from '../../../api/lists';
import { useMutation, QueryClient } from '@tanstack/react-query';
import Button from '../../../components/button/Button';

const Lists = () => {
  const navigate = useNavigate();

  //쿼리!!!!!
  const { data, status } = useQuery(['posts'], getLists);

  const queryClient = useQueryClient();

  const mutation = useMutation(deleteList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const orderedData = data?.sort((a, b) => new Date(b.time) - new Date(a.time));

  //scroll
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <S.Layout>
        <div>슬라이드 배너</div>

        <S.CardInner>
          <S.PageTitle>커뮤니티</S.PageTitle>
          <S.CardList>
            {orderedData?.map((item) => {
              return (
                <>
                  <S.Card key={item.id}>
                    <S.Content>
                      <S.Title>{item.title}</S.Title>
                      <S.Description>{item.content}</S.Description>
                      <S.CardInfo>
                        <S.IconWrapper>
                          <S.Item>작성자</S.Item>
                          <S.Item>좋아요</S.Item>
                          <S.Item>댓글</S.Item>
                          <S.Item>{item.time}</S.Item>
                        </S.IconWrapper>
                        <S.ButtonWrapper>
                          <S.ButtonText
                            onClick={() => {
                              mutation.mutate(item.id);
                            }}
                          >
                            삭제
                          </S.ButtonText>
                          <S.ButtonText
                            onClick={() => {
                              navigate(`/community/edit/${item.id}`);
                            }}
                          >
                            수정
                          </S.ButtonText>
                        </S.ButtonWrapper>
                      </S.CardInfo>
                    </S.Content>
                    <S.Figure>
                      <S.ThumbNail src={item.thumbNail} alt="" />
                    </S.Figure>
                  </S.Card>
                </>
              );
            })}
          </S.CardList>
        </S.CardInner>

        <div>
          <Button
            variant="solid"
            color="black"
            onClick={() => {
              navigate('/community/post');
            }}
          >
            추가
          </Button>
          {/* {orderedData?.map((item) => {
          return (
            <div key={item.id}>
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
            </div>
          );
        })} */}
          <button
            onClick={() => {
              MoveToTop();
            }}
          >
            스크롤up
          </button>
        </div>
      </S.Layout>
    </>
  );
};

export default Lists;
