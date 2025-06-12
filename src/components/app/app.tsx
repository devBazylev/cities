import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import Error from '../../pages/error/error';
import PrivateRoute from '../private-route/private-route';
import { ScrollToTop } from '../../utils';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import history from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
// eslint-disable-next-line no-console
/* eslint-disable */
// @ts-ignore

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Main />}/>
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Offer}/:id`} element={
            <PrivateRoute>
              <Offer />
            </PrivateRoute>
          } />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          } />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
