import * as S from './Pets.styled';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimalApi } from '../../api/api';
import Modal from 'react-modal';
import InterestButton from './InterestButton';
import Loading from '../../components/Loading/Loading';
import './PetsModal.css';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getInterest } from '../../api/interests';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux'; // Redux에서 상태 가져오기
import { addAndDeleteInterest } from '../../api/interests'; // 사용자 정보 업데이트 함수 가져오기
import { Button } from '../../components';

Modal.setAppElement('#root'); // 모달을 사용할 루트 엘리먼트 설정

function Pets() {
  const loginUser = useSelector((state) => state.user); // 사용자 정보 상태
  const [interests, setInterests] = useState([]); // 관심 동물 리스트 //interests 고유번호 저장됨
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAnimalDetail, setSelectedAnimalDetail] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidoState, setSidoState] = useState('6260000');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let tempInterestArr = [];
      if (user) {
        // 사용자가 로그인한 경우에만 관심 동물 정보를 가져와서 설정
        getInterest()
          .then((getInterests) => {
            const userInterests = getInterests.filter((interest) => interest.uid === user.uid);
            userInterests.map((interest) => {
              tempInterestArr.push(interest.desertionNo);
            });
            setInterests(tempInterestArr);
          })
          .catch((error) => {
            console.error('Error fetching interests:', error);
          });
      }
    });
  }, []);

  // Masonry Layout 적용
  const breakPointPetsColumn = {
    default: 4,
    640: 1
  };

  const { data, isLoading } = useQuery(['animalData', sidoState], () => AnimalApi(sidoState));
  //const { data: sido } = useQuery(['sidoData'], SidoApi);

  //const sidoData = sido?.response?.body?.items?.item || [];
  // ... (status 체크, 로딩 및 에러 처리 등)

  const animalItems = data?.response?.body?.items?.item || [];
  const filteredAnimals = selectedAnimal
    ? animalItems.filter((animal) => animal.kindCd.includes(selectedAnimal))
    : animalItems;

  const openModal = (animal) => {
    setSelectedAnimalDetail(animal);
    setModalIsOpen(true);
    console.log(interests);
  };

  const closeModal = () => {
    setSelectedAnimalDetail(null);
    setModalIsOpen(false);
  };

  // 관심 버튼을 토글하는 함수
  const toggleInterest = async (animal) => {
    if (!loginUser.isLogin) {
      // 로그인하지 않았을 경우 처리
      return;
    }

    const updatedInterests = isInterested(animal.desertionNo)
      ? interests.filter((id) => id !== animal.desertionNo)
      : [...interests, animal.desertionNo];

    setInterests(updatedInterests);

    if (isInterested(animal.desertionNo)) {
      // 이미 관심 동물인 경우 제거
      setInterests(interests.filter((id) => id !== animal.desertionNo));
      window.alert('관심동물을 해지했습니다.');
    } else {
      // 관심 동물 리스트에 추가
      setInterests([...interests, animal.desertionNo]);
      window.alert('관심동물로 등록되었습니다');
    }

    try {
      addAndDeleteInterest({
        newInterest: { uid: loginUser.uid, ...animal }
      });
    } catch (error) {
      console.log('Error saving interest:', error);
    }
  };

  // 동물이 관심 동물인지 확인하는 함수
  const isInterested = (animalId) => {
    return interests.includes(animalId);
  };

  // 관심 클릭
  const [isClicked, setIsClicked] = useState(false);
  const toggleClassName = () => {
    setIsClicked(!isClicked);
  };

  if (isLoading) return <Loading />;

  return (
    <S.Layout>
      <h1>동물 친구들을 소개합니다.</h1>
      <div className="button-group">
        <S.ButtonSelectWrapper>
          <Button variant="solid" color="black" onClick={() => setSelectedAnimal('')}>
            전체
          </Button>
          <Button color="black" onClick={() => setSelectedAnimal('고양이')}>
            고양이
          </Button>
          <Button color="black" onClick={() => setSelectedAnimal('개')}>
            강아지
          </Button>
        </S.ButtonSelectWrapper>
        <S.ButtonSelectWrapper>
          <Button variant="solid" color="black" onClick={() => setSidoState('6110000')}>
            서울
          </Button>
          <Button color="black" onClick={() => setSidoState('6410000')}>
            경기도
          </Button>
          <Button color="black" onClick={() => setSidoState('6260000')}>
            부산
          </Button>
          <Button color="black" onClick={() => setSidoState('6270000')}>
            대구
          </Button>
          <Button color="black" onClick={() => setSidoState('6280000')}>
            인천
          </Button>
          <Button color="black" onClick={() => setSidoState('6290000')}>
            광주
          </Button>
          <Button color="black" onClick={() => setSidoState('5690000')}>
            세종
          </Button>
          <Button color="black" onClick={() => setSidoState('6300000')}>
            대전
          </Button>
          <Button color="black" onClick={() => setSidoState('6310000')}>
            울산
          </Button>
          <Button color="black" onClick={() => setSidoState('6410000')}>
            강원
          </Button>
          <Button color="black" onClick={() => setSidoState('6430000')}>
            충북
          </Button>
          <Button color="black" onClick={() => setSidoState('6440000')}>
            충남
          </Button>
          <Button color="black" onClick={() => setSidoState('6450000')}>
            전북
          </Button>
          <Button color="black" onClick={() => setSidoState('6460000')}>
            전남
          </Button>
          <Button color="black" onClick={() => setSidoState('6470000')}>
            경북
          </Button>
          <Button color="black" onClick={() => setSidoState('6480000')}>
            경남
          </Button>
          <Button color="black" onClick={() => setSidoState('6500000')}>
            제주
          </Button>
        </S.ButtonSelectWrapper>
        {/* 다른 지역 버튼들도 추가할 수 있음 */}
      </div>

      {/* Masonry UI Layout */}
      <S.PetsLayout>
        <Masonry
          breakpointCols={breakPointPetsColumn}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* 동물 데이터를 매핑하여 카드 표시 */}
          {filteredAnimals.map((animal) => (
            <li key={animal.desertionNo} className="animal-card">
              {/* 이미지 클릭 시 모달 열기 */}
              {/* 유기번호를 동물 고유아이디로 넘기기 */}
              {animal.processState.substring(0, 2) !== '종료' && (
                <S.PetWrapper>
                  <S.Figure>
                    <S.PetThumbNail
                      className="animal-image"
                      src={animal.popfile}
                      alt={`Animal ${animal.desertionNo}`}
                      onClick={() => openModal(animal)}
                    />
                  </S.Figure>
                  {/* {loginUser.isLogin ? (
                    <InterestButton
                      animalId={animal.desertionNo}
                      desertionNo={animal}
                      isInterested={isInterested(animal.desertionNo)}
                      toggleInterest={toggleInterest}
                    />
                  ) : (
                    alert('회원만 가능합니다')
                  )} */}
                </S.PetWrapper>
              )}
              {/* 선택한 동물의 이미지를 모달에 표시 */}
              {selectedAnimalDetail === animal && (
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Animal Detail Modal"
                  className="modal"
                  overlayClassName="modal-overlay"
                >
                  <S.DialogLayout>
                    <S.DialogLeft>
                      <img
                        className="animal-image-modal"
                        src={selectedAnimalDetail.popfile}
                        alt={`Animal ${selectedAnimalDetail.desertionNo}`}
                      />

                      {/* 모달 닫기 버튼 */}
                      <S.ButtonClose className="material-symbols-outlined" onClick={closeModal}>
                        close
                      </S.ButtonClose>
                    </S.DialogLeft>
                    <S.DialogContent className="animal-detail-popup">
                      <h2>상세 정보</h2>
                      {/* 상세 정보 표시 */}
                      <p>
                        <S.SubTitle>품종 : </S.SubTitle>
                        {selectedAnimalDetail.kindCd}
                      </p>
                      <p>
                        <S.SubTitle>나이: </S.SubTitle>
                        {selectedAnimalDetail.age}
                      </p>
                      <p>
                        <S.SubTitle>성별: </S.SubTitle>
                        {selectedAnimalDetail.sexCd}
                      </p>

                      <p>
                        <S.SubTitle>중성화여부: </S.SubTitle>
                        {selectedAnimalDetail.neuterYn}
                      </p>
                      <p>
                        <S.SubTitle>특징: </S.SubTitle>
                        {selectedAnimalDetail.specialMark}
                      </p>
                      <p>
                        <S.SubTitle>발견장소: </S.SubTitle>
                        {selectedAnimalDetail.happenPlace}
                      </p>

                      <p>
                        <S.SubTitle>색상: </S.SubTitle>
                        {selectedAnimalDetail.colorCd}
                      </p>
                      <p>
                        <S.SubTitle>상태: </S.SubTitle>
                        {selectedAnimalDetail.processState}
                      </p>
                      <p>
                        <S.SubTitle>유기번호: </S.SubTitle>
                        {selectedAnimalDetail.desertionNo}
                      </p>

                      <p>
                        <S.SubTitle>공고일 : </S.SubTitle>
                        {selectedAnimalDetail.noticeSdt} ~ {selectedAnimalDetail.noticeEdt}
                      </p>

                      <p>
                        <S.SubTitle>보호소: </S.SubTitle>
                        {selectedAnimalDetail.careNm}
                      </p>
                      <p>
                        <S.SubTitle>연락처:</S.SubTitle>
                        {selectedAnimalDetail.careTel}
                      </p>
                      <S.ButtonWrapper>
                        <Button
                          variant="solid"
                          color="black"
                          size="Large"
                          href={`tel: ${selectedAnimalDetail.careTel}`}
                        >
                          문의하기
                        </Button>

                        {/* 관심등록 버튼 */}
                        {/* 로그인되었을 때만 보이도록 설정 */}
                        {loginUser.isLogin && (
                          <InterestButton
                            animal={animal}
                            isInterested={isInterested(animal.desertionNo)}
                            toggleInterest={toggleInterest}
                          />
                        )}
                      </S.ButtonWrapper>
                    </S.DialogContent>
                  </S.DialogLayout>
                </Modal>
              )}
            </li>
          ))}
        </Masonry>
      </S.PetsLayout>
    </S.Layout>
  );
}

export default Pets;
