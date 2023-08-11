import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimalApi, SidoApi } from '../../api/api';
import Modal from 'react-modal';
import '../petDetail/copy.styled.css';
import InterestButton from './InterestButton';

Modal.setAppElement('#root'); // 모달을 사용할 루트 엘리먼트 설정

function Petdetailcopy() {
  const [user, setUser] = useState(null); // 사용자 정보 상태
  const [interests, setInterests] = useState([]); // 관심 동물 리스트 //interests 고유번호 저장됨
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAnimalDetail, setSelectedAnimalDetail] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidoState, setSidoState] = useState('6260000');

  useEffect(() => {
    setUser('asdasd');
  });

  const { data, status } = useQuery(['animalData', sidoState], () => AnimalApi(sidoState));
  const { data: sido } = useQuery(['sidoData'], SidoApi);

  const sidoData = sido?.response?.body?.items?.item || [];
  // ... (status 체크, 로딩 및 에러 처리 등)

  const animalItems = data?.response?.body?.items?.item || [];
  const filteredAnimals = selectedAnimal
    ? animalItems.filter((animal) => animal.kindCd.includes(selectedAnimal))
    : animalItems;

  const openModal = (animal) => {
    setSelectedAnimalDetail(animal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAnimalDetail(null);
    setModalIsOpen(false);
  };

  // 관심 버튼을 토글하는 함수
  const toggleInterest = (animalId) => {
    if (!user) {
      // 로그인하지 않았을 경우 처리
      return;
    }

    if (isInterested(animalId)) {
      // 이미 관심 동물인 경우 제거
      setInterests(interests.filter((id) => id !== animalId));
    } else {
      // 관심 동물 리스트에 추가
      setInterests([...interests, animalId]);
    }
  };

  // 동물이 관심 동물인지 확인하는 함수
  const isInterested = (animalId) => {
    return interests.includes(animalId);
  };

  return (
    <div>
      <h1>동물 친구들을 소개합니다.</h1>
      <div className="button-group">
        <button onClick={() => setSelectedAnimal('고양이')}>고양이</button>
        <button onClick={() => setSelectedAnimal('개')}>강아지</button>
        <button onClick={() => setSelectedAnimal('')}>전체</button>
        <button onClick={() => setSidoState('6110000')}>서울</button>
        <button onClick={() => setSidoState('6410000')}>경기도</button>
        <button onClick={() => setSidoState('6260000')}>부산</button>
        <button onClick={() => setSidoState('6270000')}>대구</button>
        <button onClick={() => setSidoState('6280000')}>인천</button>
        <button onClick={() => setSidoState('6290000')}>광주</button>
        <button onClick={() => setSidoState('5690000')}>세종</button>
        <button onClick={() => setSidoState('6300000')}>대전</button>
        <button onClick={() => setSidoState('6310000')}>울산</button>
        <button onClick={() => setSidoState('6410000')}>강원</button>
        <button onClick={() => setSidoState('6430000')}>충북</button>
        <button onClick={() => setSidoState('6440000')}>충남</button>
        <button onClick={() => setSidoState('6450000')}>전북</button>
        <button onClick={() => setSidoState('6460000')}>전남</button>
        <button onClick={() => setSidoState('6470000')}>경북</button>
        <button onClick={() => setSidoState('6480000')}>경남</button>
        <button onClick={() => setSidoState('6500000')}>제주</button>

        {/* 다른 지역 버튼들도 추가할 수 있음 */}
      </div>
      <div className="album-container">
        {/* 동물 데이터를 매핑하여 카드 표시 */}
        {filteredAnimals.map((animal) => (
          <div key={animal.desertionNo} className="animal-card">
            {/* 이미지 클릭 시 모달 열기 */}
            {/* 유기번호를 동물 고유아이디로 넘기기 */}
            <img
              className="animal-image"
              src={animal.popfile}
              alt={`Animal ${animal.desertionNo}`}
              onClick={() => openModal(animal)}
            />
            {/* 선택한 동물의 이미지를 모달에 표시 */}
            {selectedAnimalDetail === animal && (
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Animal Detail Modal"
                className="modal"
                overlayClassName="modal-overlay"
              >
                {/* 관심등록 버튼 */}
                {/* 로그인되었을 때만 보이도록 설정 */}
                {user && (
                  <InterestButton
                    animalId={animal.desertionNo}
                    isInterested={isInterested(animal.desertionNo)}
                    toggleInterest={toggleInterest}
                  />
                )}
                <div className="animal-detail-popup">
                  <h2>상세 정보</h2>
                  {/* 상세 정보 표시 */}
                  <p>공고시작일: {selectedAnimalDetail.noticeSdt}</p>
                  <p>공고종료일: {selectedAnimalDetail.noticeEdt}</p>
                  <p>보호소: {selectedAnimalDetail.careNm}</p>
                  <p>보호소 전화번호: {selectedAnimalDetail.careTel}</p>
                  <p>품종: {selectedAnimalDetail.kindCd}</p>
                  <p>색상: {selectedAnimalDetail.colorCd}</p>
                  <p>중성화여부: {selectedAnimalDetail.neuterYn}</p>
                  <p>나이: {selectedAnimalDetail.age}</p>
                  <p>성별: {selectedAnimalDetail.sexCd}</p>
                  <p>상태: {selectedAnimalDetail.processState}</p>
                  <p>발견장소: {selectedAnimalDetail.happenPlace}</p>
                  <p>특징: {selectedAnimalDetail.specialMark}</p>
                  <p>유기번호: {selectedAnimalDetail.desertionNo}</p>
                  <img
                    className="animal-image-modal"
                    src={selectedAnimalDetail.popfile}
                    alt={`Animal ${selectedAnimalDetail.desertionNo}`}
                  />
                  {/* 모달 닫기 버튼 */}
                  <button onClick={closeModal}>닫기</button>
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Petdetailcopy;
