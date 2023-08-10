// import axios from 'axios';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { editList } from '../redux/modules/lists';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

// 모든 todos를 가져오는 api
const getLists = async () => {
  const querySnapshot = await getDocs(collection(db, 'lists'));
  const fetchData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  return fetchData;
  // const lists = [];
  // querySnapshot.forEach((doc) => {
  //   lists.push({
  //     id: doc.id,
  //     ...doc.data()
  //   });
  // });
  // console.log('lists', lists);
  // return lists;
};

const addList = async (newList) => {
  const newLists = await addDoc(collection(db, 'lists'), newList);
  return newLists;
};

const deleteList = async (targetId) => {
  await deleteDoc(doc(db, 'lists', targetId));
};

const updateList = async ({ targetId, editedList }) => {
  await updateDoc(doc(db, 'lists', targetId), editedList);
};

export { getLists, addList, deleteList, updateList };
