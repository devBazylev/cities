import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 32px;
  color: red;
`;

const A = styled(Link)`
  font-size: 20px;
  color: #3e92ec;
`;

function Error(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Страница отсутствует</title>
      </Helmet>
      <Header>
        <Nav />
      </Header>
      <Div>
        <H1>404 not found</H1>
        <A to="/">Go to main page</A>
      </Div>
    </div>
  );
}

export default Error;
