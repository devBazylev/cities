import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import Favorites from '../../pages/favorites/favorites';
import Page404 from '../../pages/page404/page404';
import { ScrollToTop } from '../../utils/utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
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
          <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// eslint-disable-next-line no-console

export default App;
