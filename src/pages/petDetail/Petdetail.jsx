import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimalApi } from '../../api/api';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달을 사용할 루트 엘리먼트 설정

function Petdetail() {
  const { data, status } = useQuery(['animalData'], AnimalApi);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAnimalDetail, setSelectedAnimalDetail] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  const animalItems = data.response.body.items.item;
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

  return (
    <div>
      <h1>동물 친구들을 소개합니다.</h1>
      <div className="button-group">
        <button onClick={() => setSelectedAnimal('고양이')}>고양이</button>
        <button onClick={() => setSelectedAnimal('개')}>강아지</button>
        <button onClick={() => setSelectedAnimal('')}>전체</button>
      </div>
      <div className="album-container">
        {filteredAnimals.map((animal) => (
          <div key={animal.desertionNo} className="animal-card">
            {/* 이미지 클릭 시 모달 열기 */}
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
                <div className="animal-detail-popup">
                  <h2>상세 정보</h2>
                  <p>Kind: {selectedAnimalDetail.kindCd}</p>
                  <p>Color: {selectedAnimalDetail.colorCd}</p>
                  <p>Age: {selectedAnimalDetail.age}</p>
                  <p>Happen Place: {selectedAnimalDetail.happenPlace}</p>
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

export default Petdetail;
