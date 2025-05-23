import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import Error from '../../pages/error/error';
import PrivateRoute from '../private-route/private-route';
import { ScrollToTop } from '../../utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import type { CardListProps } from '../../types';
// eslint-disable-next-line no-console
/* eslint-disable */
// @ts-ignore

function App({ cards }: CardListProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Main cards={cards} />}/>
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Offer}/:id`} element={<Offer authorizationStatus={AuthorizationStatus.Auth} />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites cards={cards} />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
