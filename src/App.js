import { useEffect } from 'react';
import { GlobalStyle, Fonts } from './assets';
import Router from './shared/Router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/modules/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const loginUser = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        isLogin: true
      };

      const logoutUser = {
        uid: '',
        displayName: '',
        email: '',
        photoURL: '',
        isLogin: false
      };

      if (user) {
        dispatch(setUser(loginUser));
      } else {
        dispatch(setUser(logoutUser));
      }
    });
  });

  return (
    <>
      <GlobalStyle />
      <Fonts />
      <Router />
    </>
  );
}

export default App;
