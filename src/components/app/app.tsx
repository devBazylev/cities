import Main from '../../pages/main/main';
import {AppProps} from '../../types/types';

function App({cardsCount}: AppProps): JSX.Element {
  return (
    <Main cardsCount= {cardsCount} />
  );
}

export default App;
