// src/components/SignUp.js
import { useState } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { validateEmail, validatePassword, validateNickname, validatePhone } from '../siginup/validation';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      alert('올바른 이메일 주소를 입력해주세요');
      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호는 8~16자 사이이며 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다.');
      return;
    }

    if (!validateNickname(nickname)) {
      alert('닉네임은 2~30자 사이이며 영문자, 숫자, 한글, 띄어쓰기를 사용할 수 있습니다.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('올바른 전화번호를 입력해주세요');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      // Firestore에 유저 정보 저장
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userDocRef, {
        nickname: nickname,
        email: email,
        phone: phone,
        uid: userCredential.user.uid
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
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
      <input
        type="text"
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
        }}
        placeholder="닉네임"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        placeholder="전화번호"
      />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}

export default SignUp;
