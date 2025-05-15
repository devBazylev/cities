import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';

function Page404(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <Nav />
      </Header>
      <h1 style={{textAlign: 'center'}}>404 not found</h1>
    </div>
  );
}

export default Page404;
