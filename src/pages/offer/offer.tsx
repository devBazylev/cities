import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import FormOffer from '../../components/form-offer/form-offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewsItem from '../../components/reviews-item/reviews-item';
// import Map from '../../components/map/map';
import CardListOffer from '../../components/card-list-offer/card-list-offer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthorizationProps } from '../../types';
import { AuthorizationStatus } from '../../const';
import { reviews } from '../../mock/reviews';
import { cards } from '../../mock/offer';

// const MAP_PLACE = 'property';

function Property({authorizationStatus}: AuthorizationProps): JSX.Element {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
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
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">Beautiful &amp; luxurious studio at great location</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}><use xlinkHref="#icon-bookmark" /></svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">Apartment</li>
                <li className="property__feature property__feature--bedrooms">3 Bedrooms</li>
                <li className="property__feature property__feature--adults">Max 4 adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">Wi-Fi</li>
                  <li className="property__inside-item">Washing machine</li>
                  <li className="property__inside-item">Towels</li>
                  <li className="property__inside-item">Heating</li>
                  <li className="property__inside-item">Coffee machine</li>
                  <li className="property__inside-item">Baby seat</li>
                  <li className="property__inside-item">Kitchen</li>
                  <li className="property__inside-item">Dishwasher</li>
                  <li className="property__inside-item">Cabel TV</li>
                  <li className="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">Angelina</span>
                  <span className="property__user-status">Pro</span>
                </div>
                <div className="property__description">
                  <p className="property__text">A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.</p>
                  <p className="property__text">An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList>
                  {reviews?.map((review) => (
                    <ReviewsItem key={review.id} {...review} />
                  ))}
                </ReviewsList>
                {isAuth && (<FormOffer />)}
              </section>
            </div>
          </div>
          {/* <Map cards={cards} place={MAP_PLACE}/> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardListOffer cards={cards} wrapName={'near-places'}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
