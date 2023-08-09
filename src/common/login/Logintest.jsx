import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

function HandleLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      alert('올바른 이메일 주소를 입력해주세요');
      return;
    }

    // 회원가입 코드
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setCurrentUser(userCredential.user.email);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async () => {
    // 로그인 코드
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user.email);
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    // 로그아웃 코드
    alert('로그아웃 할까?');
    await signOut(auth);
    setCurrentUser(null);
  };

  return (
    <>
      <div>
        {currentUser ? (
          <>
            <p>현재 로그인한 사용자 : {currentUser}</p>
            <button onClick={handleSignOut}>로그아웃</button>
          </>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={handleSignUp}>회원가입</button>
            <button onClick={handleLogin}>로그인</button>
          </>
        )}
      </div>
    </>
  );
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export default HandleLogin;
