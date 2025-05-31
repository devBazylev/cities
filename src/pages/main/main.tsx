import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardList from '../../components/card-list/card-list';
import FormSorting from '../../components/form-sorting/form-sorting';
import Map from '../../components/map/map';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Settings } from '../../const';
import { CardListProps } from '../../types';
import CitiesList from '../../components/cities-list/cities-list';

function Main({ cards }: CardListProps): JSX.Element {
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
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{Settings.OffersCount} places to stay in Amsterdam</b>
              <FormSorting />
              <CardList cards={cards}/>
            </section>
            <div className="cities__right-section">
              <Map cards={cards} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
