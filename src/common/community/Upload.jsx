import React, { useEffect, useRef, useState } from 'react';
import { storage } from '../../firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { nanoid } from 'nanoid';
import { listAll, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';

const Upload = () => {
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + nanoid()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image Upload');
    });
  };

  //쿼리!!!!!
  //fb img
  // const [imageList, setImageList] = useState([]);/
  const imageListRef = ref(storage, 'images/');

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // dispatch(setUrl(url));
        });
      });
    });
  }, []);

  return (
    <div>
      <>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button text="업로드하기" onClick={uploadImage}>
          이미지 업로드
        </button>
      </>
    </div>
  );
};

export default Upload;
