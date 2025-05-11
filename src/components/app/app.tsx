import Main from '../main/main';
// import MainEmpty from '../main-empty/main-empty';

type Props = {
  props: number;
}

function App({props}: Props): JSX.Element {
  return (
    <Main cardsCount= {props} />
  );
}

export default App;
