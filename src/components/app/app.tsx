import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import Favorites from '../../pages/favorites/favorites';
import Error from '../../pages/error/error';
import { ScrollToTop } from '../../utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App({offersCount}: {offersCount: number}): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Main offersCount= {offersCount}/>}/>
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// eslint-disable-next-line no-console

export default App;
