import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

// 모든 todos를 가져오는 api
const getInterest = async () => {
  const querySnapshot = await getDocs(collection(db, 'interests'));
  const fetchData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  return fetchData;
};

/* User 관심 파이어베이스 추가  */
const addAndDeleteInterest = async ({ newInterest }) => {
  // const newPosts = await addDoc(collection(db, 'posts'), newPost);
  // const addInterest = await setDoc(doc(db, 'interests', uid), newInterest);
  let noneExist = true;
  let docId = '';
  // 파이어스토어에 query를 이용해 로그인한 계정의 uid 와 동물의 유기번호가 일치하는 데이터가 있는지 찾음
  const dbInterests = query(
    collection(db, 'interests m-====='),
    where('uid', '==', newInterest.uid),
    where('desertionNo', '==', newInterest.desertionNo)
  );

  const userSnapshot = await getDocs(dbInterests);
  // 일치하는 데이터가 있으면 noneExist가 false 값 , 없으면 true
  userSnapshot.forEach((doc) => {
    if (doc.data().uid === newInterest.uid && doc.data().desertionNo === newInterest.desertionNo) {
      noneExist = false;
      docId = doc.id;
    }
  });
  // 일치하는 데이터가 없으면 addDoc 을 통해 interest 데이터 추가
  if (noneExist) {
    const addInterest = await addDoc(collection(db, 'interests'), newInterest);

    return addInterest;
  } else {
    // 일치하는 데이터가 있으면 deleteDoc을 통해 interset 데이터 삭제
    if (docId !== '') {
      const deleteInterest = await deleteDoc(doc(db, 'interests', docId));

      return deleteInterest;
    }
  }
};

const deleteInterest = async (targetId) => {
  await deleteDoc(doc(db, 'interests', targetId));
};

const updateInterest = async ({ targetId, editedInterests }) => {
  await updateDoc(doc(db, 'interests', targetId), editedInterests);
};

export { getInterest, addAndDeleteInterest, deleteInterest, updateInterest };
