import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
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
const addInterest = async ({ newInterest, uid }) => {
  // const newPosts = await addDoc(collection(db, 'posts'), newPost);
  // const addInterest = await setDoc(doc(db, 'interests', uid), newInterest);
  const addInterest = await addDoc(collection(db, 'interests'), newInterest);

  return addInterest;
};

const deleteInterest = async (targetId) => {
  await deleteDoc(doc(db, 'interests', targetId));
};

const updateInterest = async ({ targetId, editedInterests }) => {
  await updateDoc(doc(db, 'interests', targetId), editedInterests);
};

export { getInterest, addInterest, deleteInterest, updateInterest };
