import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getCityId } from '../../utils';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks/useRedux';
import Card from '../../components/card/card';
import { useState } from 'react';

function Favorites(): JSX.Element {
  /* eslint-disable */
  // @ts-ignore
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const cards = useAppSelector((state) => state.offers);
  const cardsMarked = cards.filter((card) => card.isMarked);
  const cities = Array.from(new Set(cardsMarked.map((elem) => elem.city.name)));
  const WRAP_NAME = 'favorites';

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="page">
      <HelmetProvider>
        <Helmet>
          <title>Страница избранное</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Nav />
      </Header>
      {cardsMarked.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities?.map((city) => (
                  <li className="favorites__locations-items" key={getCityId()}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cardsMarked.filter((card) => city === card.city.name).map((card) => (
                        <Card key={card.id} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} wrapName={WRAP_NAME} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <FavoritesEmpty />
      )}
      <Footer />
    </div>
  );
}

export default Favorites;
