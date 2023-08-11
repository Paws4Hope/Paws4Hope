import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { nanoid } from 'nanoid';
import { doc } from 'firebase/firestore';

const ImageUpload = () => {
  // 1. 업로드할 이미지 파일 선택 [ㅇ]
  // 2. 파이어베이스 storage 저장 [ㅇ]
  // 3. URL 파이어베이스 DB 컬렉션에 저장 []

  const [preview, setPreview] = useState(null);

  // 1. 업로드할 이미지 파일 선택 [ㅇ]
  const handleUpload = (e) => {
    handleFileSelect(e.target.files[0]);
    let prevImage = URL.createObjectURL(e.target.files[0]);
    setPreview(prevImage);
  };

  // 2. 파이어베이스 storage 저장 [ㅇ]
  const handleFileSelect = async (file) => {
    const imageRef = ref(storage, `images/${ImageUpload.name + nanoid()}`);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);

    // 3. URL 파이어베이스 DB 컬렉션에 저장 []
    // await updateDoc(doc(db, 'img')),
    //   {
    //     imgUrl: downloadURL
    //   };
  };

  return (
    <>
      <div>
        <label htmlFor="imageFile">썸네일 추가</label>
        <img src={preview} />
        <input
          id="imageFile"
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleUpload}
          style={{ display: 'none' }}
        />
      </div>
    </>
  );
};

export default ImageUpload;
