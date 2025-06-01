import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardListOffer from '../../components/card-list-offer/card-list-offer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Property(): JSX.Element {
  return (
    <div className="page">
      <HelmetProvider>
        <Helmet>
          <title>Страница предложения</title>
        </Helmet>
      </HelmetProvider>
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
