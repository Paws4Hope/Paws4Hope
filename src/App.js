import { useEffect } from 'react';
import { GlobalStyle, Fonts } from './assets';
import Router from './shared/Router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('로그인 유저 : ', auth.currentUser);
      } else {
        console.log('로그아웃');
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
