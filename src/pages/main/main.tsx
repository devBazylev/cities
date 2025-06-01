import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardListMain from '../../components/card-list-main/card-list-main';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HelmetProvider>
        <Helmet>
          <title>Главная страница</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Nav />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CardListMain />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
