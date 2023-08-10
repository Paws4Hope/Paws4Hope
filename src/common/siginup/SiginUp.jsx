import * as S from './SignUp.styled';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { validateEmail, validatePassword, validateNickname, validatePhone } from '../siginup/validation';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import ButtonGoogle from '../../assets/images/btn_google.svg';
import ImageSignUp from '../../assets/images/img_signup.png';
import { Link } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [{ email, password, passwordVerify, nickname }, onChange] = useInput('');

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

    // if (!validatePhone(phone)) {
    //   alert('올바른 전화번호를 입력해주세요');
    //   return;
    // }

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
    <S.Layout>
      <S.LeftWrapper>
        <S.Image src={ImageSignUp} alt="회원가입 이미지" />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Card>
          <S.Title>회원가입</S.Title>
          <S.ButtonGoogle>
            <img src={ButtonGoogle} alt="Button Google" />
          </S.ButtonGoogle>
          <S.DivisionLine>
            <S.DivisionText>또는 이메일 로그인</S.DivisionText>
          </S.DivisionLine>

          <S.InputItem>
            <S.Label htmlFor="nickname">닉네임:</S.Label>
            <S.Input type="text" name="nickname" value={nickname} onChange={onChange} />
          </S.InputItem>

          <S.InputItem>
            <S.Label htmlFor="email">이메일:</S.Label>
            <S.Input type="email" name="email" value={email} onChange={onChange} />
          </S.InputItem>

          <S.InputItem>
            <S.Label htmlFor="password">비밀번호:</S.Label>
            <S.Input type="password" name="password" value={password} onChange={onChange} />
          </S.InputItem>

          <S.InputItem>
            <S.Label htmlFor="passwordVerify">비밀번호 확인:</S.Label>
            <S.Input type="password" name="passwordVerify" value={passwordVerify} onChange={onChange} />
          </S.InputItem>

          <S.AuthLink>
            이미 회원이신가요?
            <Link to="/login">
              <S.ButtonText>로그인</S.ButtonText>
            </Link>
          </S.AuthLink>
          <button onClick={handleSignUp}>회원가입</button>
        </S.Card>
      </S.RightWrapper>
    </S.Layout>
  );
}

export default SignUp;
