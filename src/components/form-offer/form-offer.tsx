import { Fragment } from 'react';
import { OfferForm } from '../../types';

function FormOffer({ text, onChange, rating, onRatingChange, onSubmit }: OfferForm ): JSX.Element {
  const getStarTitle = (star: number): string => {
    if (star === 5) {return 'perfect';}
    if (star === 4) {return 'good';}
    if (star === 3) {return 'not bad';}
    if (star === 2) {return 'badly';}
    return 'terribly';
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${star}-stars`}
              type="radio"
              value={star}
              checked={rating === star}
              onChange={() => onRatingChange && onRatingChange(star)}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={getStarTitle(star)}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={onChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormOffer;
