import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import Locations from '../../pages/page404/page404';
import {ScrollToTop} from '../../utils/utils';
import {AppProps} from '../../types/types';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import cities from '../../mock/cities';

function App({offersCount}: AppProps, {cities}: {cities}): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout showNav />}>
          <Route path="/" element={<Main offersCount= {offersCount}/>}/>
          <Route path="/:id" element={<Locations cities={cities} />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/property" element={<Property />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
