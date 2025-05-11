import Main from '../main/main';

type Props = {
  props: number;
}

function App({props}: Props): JSX.Element {
  return (
    <Main cardsCount= {props} />
  );
}

export default App;
