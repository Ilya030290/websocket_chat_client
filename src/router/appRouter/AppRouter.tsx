import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../routes';
import Layout from '../../common/components/Layout';
import MainPage from '../../pages/main/MainPage';
import ChatPage from '../../pages/chatPage/ChatPage';
import Login from '../../pages/login/Login';
import SignUp from '../../pages/signup/SignUp';
import NotFound from '../../pages/notFound/NotFound';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.MAIN_PAGE} element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTES.CHAT_PAGE} element={<ChatPage />} />
    </Route>
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.SIGNUP} element={<SignUp />} />
    <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
  </Routes>
);

export default AppRouter;
