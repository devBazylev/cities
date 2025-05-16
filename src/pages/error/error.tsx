import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './error.css';

function Error(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Страница отсутствует</title>
      </Helmet>
      <Header>
        <Nav />
      </Header>
      <div className="error">
        <h1 className="error__title" style={{textAlign: 'center'}}>404 not found</h1>
        <Link className="error__link" to="/">Go to main page</Link>
      </div>
    </div>
  );
}

export default Error;
