import { Route, Routes } from 'react-router-dom';
import {
  Community,
  CommunityDetail,
  CommunityEdit,
  CommunityPost,
  EditMyapge,
  Login,
  Signup,
  Mypage,
  PetDetail,
  Pets,
  SurveyForm
} from '../pages';
import { Header } from '../common';

const Router = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        <Route path="/community/edit/:id" element={<CommunityEdit />} />
        <Route path="/community/post" element={<CommunityPost />} />
      </Route>
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/edit" element={<EditMyapge />} />
      <Route path="/" element={<Pets />} />
      <Route path="/pets/:id" element={<PetDetail />} />
      <Route path="/surveyform" element={<SurveyForm />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
