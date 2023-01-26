import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../routes';
import Layout from '../../components/Layout';
import Login from '../../pages/login/Login';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.MAIN_PAGE} element={<Layout />}>
      {/*<Route index element={<MainPage />} />*/}
      {/*<Route path={ROUTES.SIGNUP} element={<SignUp />} />*/}
      {/*<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />*/}
    </Route>
    <Route path={ROUTES.LOGIN} element={<Login />} />
  </Routes>
);

export default AppRouter;
