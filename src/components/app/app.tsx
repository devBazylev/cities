import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Unknown from '../../pages/unknown/unknown';
import {AppProps} from '../../types/types';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showNav />}>
          <Route path="/" element={<Main offersCount= {offersCount}/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/property" element={<Property />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="*" element={<Unknown />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
