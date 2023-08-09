// import { collection, getDocs, addDoc, query } from 'firebase/firestore';

// import { db } from '../firebase';
// import { useQuery } from '@tanstack/react-query';

// const getLists = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, 'lists'));
//     const lists = [];
//     querySnapshot.forEach((doc) => {
//       lists.push({
//         id: doc.id,
//         ...doc.data()
//       });
//     });
//     return lists;
//   } catch (error) {
//     return '에러';
//   }
// };

// const useGetLists = () => {
//   const getLists = useQuery('firebaseLists',async()=>{
//   try{
//     const q = query(collection(db,'lists'))
//     const querySnapshot = await getDocs(q)
//     const initialLists = []

//     querySnapshot.forEach((doc) => {
//       initialLists.push({
//         id:doc.id,
//         ...doc.data()
//       })
//     })
//     return initialLists
//   } catch(error){
//     return '에러입니다'
//   }
//   })

// }

// export { getLists };
