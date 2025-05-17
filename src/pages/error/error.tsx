import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const H1Styled = styled.h1`
  margin: 0;
  font-size: 32px;
  color: red;
`;

const LinkStyled = styled(Link)`
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
      <DivStyled>
        <H1Styled>404 not found</H1Styled>
        <LinkStyled to="/">Go to main page</LinkStyled>
      </DivStyled>
    </div>
  );
}

export default Error;
