// import axios from 'axios';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { editList } from '../redux/modules/lists';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

// 모든 todos를 가져오는 api
const getLists = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const fetchData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  return fetchData;
};

const addList = async ({ newPost, id }) => {
  // const newPosts = await addDoc(collection(db, 'posts'), newPost);
  const newPosts = await setDoc(doc(db, 'posts', id), newPost);

  return newPosts;
};

const deleteList = async (targetId) => {
  await deleteDoc(doc(db, 'posts', targetId));
};

const updateList = async ({ targetId, editedList }) => {
  await updateDoc(doc(db, 'posts', targetId), editedList);
};

export { getLists, addList, deleteList, updateList };

//useQuery newQuery차이
// useQuery 실행순서
