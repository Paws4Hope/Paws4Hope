import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const getComments = async () => {
  const querySnapshot = await getDocs(collection(db, 'comments'));
  const fetchData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  return fetchData;
};

const addComments = async (comment) => {
  const newComment = await addDoc(collection(db, 'comments'), comment);

  return newComment;
};

const deleteComments = async (targetId) => {
  await deleteDoc(doc(db, 'comments', targetId));
};

const updateComments = async ({ targetId, editedComment }) => {
  await updateDoc(doc(db, 'comments', targetId), editedComment);
};

export { getComments, addComments, deleteComments, updateComments };
