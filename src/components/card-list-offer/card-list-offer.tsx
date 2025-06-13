import Card from '../card/card';
import FormOffer from '../../components/form-offer/form-offer';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import Map from '../map/map';
import Spinner from '../spinner/spinner';
import { useState, useEffect, Fragment } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchOffer, fetchNearbyOffers, fetchComments } from '../../store/api-action';

function CardListOffer(): JSX.Element | null {
  const PROPERTY = 'property';
  const WRAP_NAME = 'near-places';

  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOfferLoading = useAppSelector((state) => state.isOfferLoading);
  const offer = useAppSelector((state) => state.offer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const comments = useAppSelector((state) => state.comments);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchOffer(parsedId));
      dispatch(fetchNearbyOffers(parsedId));
      dispatch(fetchComments(parsedId));
    }
  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner />;
  }

  const { id, images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description, city, location } = offer;

  const limitMarkers = nearbyOffers.map(({ id: nearbyId, location: nearbyLocation, }) => ({ id: nearbyId, ...nearbyLocation }));
  limitMarkers.push({ id, latitude: location.latitude, longitude: location.longitude, zoom: location.zoom });
  const limitImages = (images.length > 6) ? images.slice(0, 6) : images;

  return (
    <Fragment>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {limitImages?.map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}><use xlinkHref="#icon-bookmark" /></svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${rating * 20}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{type}</li>
              <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
              <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              {goods.length > 0 && (
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="property__inside-item">{good}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper${host.isPro ? ' property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt={host.name} />
                </div>
                <span className="property__user-name">{host.name}</span>
                {host.isPro && <span className="property__user-status">Pro</span>}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
              <ReviewsList>
                {comments?.map((comment) => (
                  <ReviewsItem key={comment.id} {...comment} />
                ))}
              </ReviewsList>
              {authorizationStatus && <FormOffer />}
            </section>
          </div>
        </div>
        <Map locations={limitMarkers} activeCity={city} activeOffer={activeOffer} place={PROPERTY} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {nearbyOffers?.map((card) => (
              <Card key={card.id} wrapName={WRAP_NAME} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default CardListOffer;
