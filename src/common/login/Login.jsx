import * as S from './Login.styled';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { validateEmail, validatePassword } from '../siginup/validation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      alert('올바른 이메일 주소를 입력해주세요');
      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호는 8~16자 사이이며 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('로그인 성공:', userCredential.user);
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <S.Layout>
      <S.LeftWrapper></S.LeftWrapper>
      <S.RightWrapper>
        <div>
          <h1>로그인</h1>
          <div>
            <label htmlFor="email">이메일:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>로그인</button>
        </div>
      </S.RightWrapper>
    </S.Layout>
  );
}

export default Login;
