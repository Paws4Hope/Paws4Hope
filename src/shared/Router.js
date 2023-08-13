import { Route, Routes } from 'react-router-dom';
import {
  Community,
  CommunityDetail,
  CommunityEdit,
  CommunityPost,
  EditMyapge,
  Login,
  Mypage,
  Pets,
  SurveyForm,
  SurveyDone,
  Signup,
  Main
} from '../pages';
import { GlobalLayout } from '../common';

const Router = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityDetail />} />

        <Route path="/pets" element={<Pets />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/edit" element={<EditMyapge />} />
      </Route>
      <Route path="/community/edit/:id" element={<CommunityEdit />} />
      <Route path="/community/post" element={<CommunityPost />} />
      <Route path="/surveyform" element={<SurveyForm />} />
      <Route path="/surveyDone" element={<SurveyDone />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
