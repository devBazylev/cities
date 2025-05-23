import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CardListProps } from '../../types';
import { getCityId } from '../../utils';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function Favorites({ cards }: CardListProps): JSX.Element {
  const cardsMarked = cards.filter((card) => card.isMarked);
  const cities = Array.from(new Set(cardsMarked.map((elem) => elem.city.name)));
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
                      {cardsMarked.filter((card) => city === card.city.name).map(({id, img, isPremium, price, isMarked, rating, description, type}) => (
                        <article className="favorites__card place-card" key={id}>
                          {isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to="#">
                              <img className="place-card__image" src={img} width={150} height={110} alt="Place" />
                            </Link>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">€{price}</b>
                                <span className="place-card__price-text">/&nbsp;night</span>
                              </div>
                              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                <svg className="place-card__bookmark-icon" width={18} height={19}>
                                  <use xlinkHref="#icon-bookmark" />
                                </svg>
                                <span className="visually-hidden">{isMarked}</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{width: `${rating * 20}%`}} />
                                <span className="visually-hidden">{rating}</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to="#">
                                {description}
                              </Link>
                            </h2>
                            <p className="place-card__type">{type}</p>
                          </div>
                        </article>
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
