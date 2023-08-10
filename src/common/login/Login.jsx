import * as S from './Login.styled';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { validateEmail, validatePassword } from '../siginup/validation';
import ButtonGoogle from '../../assets/images/btn_google.svg';
import { Link } from 'react-router-dom';

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
        <S.Card>
          <S.Title>로그인</S.Title>
          <S.ButtonGoogle>
            <img src={ButtonGoogle} alt="Button Google" />
          </S.ButtonGoogle>
          <S.DivisionLine>
            <S.DivisionText>또는 이메일 로그인</S.DivisionText>
          </S.DivisionLine>
          <S.InputItem>
            <S.Label htmlFor="email">이메일:</S.Label>
            <S.Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </S.InputItem>

          <S.InputItem>
            <S.Label htmlFor="password">비밀번호:</S.Label>
            <S.Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputItem>
          <S.AuthLink>
            아직 회원이 아니신가요?
            <Link to="/signup">
              <S.ButtonText>회원가입</S.ButtonText>
            </Link>
          </S.AuthLink>
          <button onClick={handleLogin}>로그인</button>
        </S.Card>
      </S.RightWrapper>
    </S.Layout>
  );
}

export default Login;
