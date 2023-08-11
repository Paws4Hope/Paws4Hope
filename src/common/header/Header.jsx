import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>Logo</div>
          <div>
            <nav>
              <li>임시보호소개</li>
              <li>동물소개</li>
              <li>입양후기</li>
              <li>커뮤니티</li>
            </nav>
          </div>
          <div>search</div>
          <div>
            <button>로그인</button>
            <button>로그아웃</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
