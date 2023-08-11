import { useEffect, useState } from 'react';
import { auth, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

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

    try {
      const snapshot = await uploadTask;
      const downloadURL = await getDownloadURL(snapshot.ref);

      await user.updateProfile({ photoURL: downloadURL });

      alert('프로필 이미지가 업데이트되었습니다.');
    } catch (e) {
      console.error(e);
      alert('이미지 업로드 도중 오류가 발생했습니다.');
    }
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
        </div>
      ) : (
        <p>로그인한 사용자가 없습니다.</p>
      )}
    </div>
  );
}

export default MyPage;
