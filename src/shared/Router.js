import { Route, Routes } from 'react-router-dom';
import {
  Community,
  CommunityDetail,
  CommunityEdit,
  CommunityPost,
  EditMyapge,
  Login,
  Mypage,
  PetDetail,
  Pets,
  SurveyForm,
  Main
} from '../pages';
import Signup from '../pages/signup/Signup';
import SurveyDone from '../pages/surveyForm/SurveyDone';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/community/:id" element={<CommunityDetail />}></Route>
      <Route path="/community/edit/:id" element={<CommunityEdit />}></Route>
      <Route path="/community/post" element={<CommunityPost />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/mypage/edit" element={<EditMyapge />}></Route>
      <Route path="/pets" element={<Pets />}></Route>
      <Route path="/pets/:id" element={<PetDetail />}></Route>
      <Route path="/surveyform" element={<SurveyForm />}></Route>
      <Route path="/surveyDone" element={<SurveyDone />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Router;
