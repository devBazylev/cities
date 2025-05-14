import Main from '../../pages/main/main';
import {AppProps} from '../../types/types';

function App({offersCount}: AppProps): JSX.Element {
  return (
    <Main offersCount= {offersCount} />
  );
}

export default App;
