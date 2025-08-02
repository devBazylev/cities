import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Card from '../../components/card/card';
import Spinner from '../../components/spinner/spinner';
import { useEffect } from 'react';
import { getFavoriteOffers, getIsFavoriteOffersLoading } from '../../store/site-data/selectors';
import { fetchFavoriteOffers } from '../../store/action';
import { OfferProps } from '../../types';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const groupedOffersByCity = favoriteOffers.reduce<{ [key: string ]: OfferProps[] }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  if (isFavoriteOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <HelmetProvider>
        <title>Страница избранное</title>
      </HelmetProvider>
      <Header>
        <Nav />
      </Header>
      {favoriteOffers.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedOffers.map((offer) => <Card key={offer.id} {...offer} wrapName="favorites" />)}
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
