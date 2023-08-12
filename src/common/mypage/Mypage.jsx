import { useEffect, useState } from 'react';
import { auth, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import LogoutButton from '../login/LogoutButton';

function MyPage() {
  const [user, setUser] = useState(auth.currentUser);
  const [image, setImage] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

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
    <div>
      <h1>마이 페이지</h1>
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
          <LogoutButton />
        </div>
      ) : (
        <p>로그인한 사용자가 없습니다.</p>
      )}
    </div>
  );
}

export default MyPage;
