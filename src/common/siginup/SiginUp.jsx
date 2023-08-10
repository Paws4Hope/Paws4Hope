// src/components/SignUp.js
import { useState } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, updatePhoneNumber, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { validateEmail, validatePassword, validateNickname, validatePhone } from '../siginup/validation';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [{ email, password, passwordVerify, nickname, phone }, onChange] = useInput('');

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [phone, setPhone] = useState('');

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
      const user = userCredential.user;

      try {
        await updateProfile(user, { displayName: nickname });
      } catch (error) {
        console.log('사용자정보 업데이트 오류 : ', error.code);
      }

      navigate('/');
    } catch (e) {
      console.error('회원가입 error : ', e.code);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="이메일" />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="비밀번호" />
      <input
        type="password"
        name="passwordVerify"
        value={passwordVerify}
        onChange={onChange}
        placeholder="비밀번호 확인"
      />
      <input type="text" name="nickname" value={nickname} onChange={onChange} placeholder="닉네임" />
      <input type="tel" name="phone" value={phone} onChange={onChange} placeholder="전화번호" />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}

export default SignUp;
