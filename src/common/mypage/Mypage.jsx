import * as S from './Mypage.styled';
import { useEffect, useState } from 'react';
import { auth, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { getInterest } from '../../api/interests';
import { Button } from '../../components';

function MyPage() {
  const [user, setUser] = useState(auth.currentUser);
  const [image, setImage] = useState(null);
  const [userInterests, setUserInterests] = useState([]); // 사용자 관심 동물 정보 상태 추가
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAnimalDetail, setSelectedAnimalDetail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // 사용자가 로그인한 경우에만 관심 동물 정보를 가져와서 설정
        getInterest()
          .then((interests) => {
            const userInterests = interests.filter((interest) => interest.uid === user.uid);
            setUserInterests(userInterests);
          })
          .catch((error) => {
            console.error('Error fetching interests:', error);
          });
      }
    });
  }, []);

  const openModal = (animal) => {
    setSelectedAnimalDetail(animal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAnimalDetail(null);
    setModalIsOpen(false);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUploadImage = async () => {
    if (!image) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const imagePath = `profileImages/${user.uid}`;

    const storageRef = ref(storage, imagePath);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // 진행률을 계산합니다.
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // 에러 처리
        console.error(error);
        alert('이미지 업로드 도중 오류가 발생했습니다.');
      },
      async () => {
        // 업로드가 완료되면 다운로드 URL을 얻습니다.
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // 프로필 업데이트
        await updateProfile(auth?.currentUser, { photoURL: downloadURL });

        alert('프로필 이미지가 업데이트되었습니다.');
      }
    );
  };

  return (
    <S.Layout>
      <h1>마이 페이지</h1>
      <Link to="/">메인 페이지로 이동</Link>
      {user ? (
        <div>
          <p>닉네임: {user.displayName}</p>
          <p>이메일: {user.email}</p>
          <img
            src={user.photoURL}
            alt="프로필 이미지"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          <div>
            <input type="file" onChange={handleChangeImage} />
            <button onClick={handleUploadImage}>프로필 이미지 업로드</button>
          </div>
          <h2>나의 관심 동물</h2>
          <ul>
            {userInterests.map((interest) => (
              <li key={interest.desertionNo}>
                <img
                  src={interest.popfile}
                  alt={`동물 사진 ${interest.desertionNo}`}
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  onClick={() => openModal(interest)}
                />
                {selectedAnimalDetail === interest && (
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
                        </S.ButtonWrapper>
                      </S.DialogContent>
                    </S.DialogLayout>
                  </Modal>
                )}
              </li>
            ))}
          </ul>

          {/* <LogoutButton /> */}
        </div>
      ) : (
        <p>로그인한 사용자가 없습니다.</p>
      )}
    </S.Layout>
  );
}

export default MyPage;
