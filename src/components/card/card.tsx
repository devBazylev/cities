import { memo } from 'react';
import { Link } from 'react-router-dom';
import { OfferProps } from '../../types';
import { AppRoute } from '../../const';
import Bookmark from '../bookmark/bookmark';

type CardProps = OfferProps & {
  wrapName?: 'cities' | 'near-places' | 'favorites';
};

const Card = ({id, previewImage, isPremium, price, isFavorite, rating, description, type, onMouseMove, onMouseLeave, wrapName = 'cities'}: CardProps): JSX.Element => {
  let articleClassName = '';

  switch (wrapName) {
    case 'cities':
      articleClassName = 'cities__place-card place-card';
      break;
    case 'near-places':
      articleClassName = 'near-places__card place-card';
      break;
    case 'favorites':
      articleClassName = 'favorites__card place-card';
      break;
    default:
      articleClassName = 'cities__place-card place-card';
  }

  const wrapStyle = wrapName === 'favorites' ? { maxWidth: '150px' } : undefined;

  return (
    <article className={articleClassName} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
      <div className={`${wrapName}__image-wrapper place-card__image-wrapper`} style={wrapStyle}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className={`${wrapName === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark id={id} isActive={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {description}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const MemoizedCard = memo(Card, (prevProps, nextProps) => prevProps.isFavorite === nextProps.isFavorite);

export default MemoizedCard;
