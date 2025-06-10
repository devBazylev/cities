import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardListOffer from '../../components/card-list-offer/card-list-offer';
import { Helmet } from 'react-helmet-async';

function Property(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Страница предложения</title>
      </Helmet>
      <Header>
        <Nav />
      </Header>
      <main className="page__main page__main--property">
        <CardListOffer />
      </main>
    </div>
  );
}

export default Property;
