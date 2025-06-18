import { ReactEventHandler, useState, Fragment, useRef, FormEvent } from 'react';
import type { CommentAuth } from '../../types';

type ChangeHandlerProps = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type FormProps = {
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
}

function FormOffer({ onSubmit }: FormProps): JSX.Element {
  const inputRef = useRef<HTMLFormElement>(null);
  const [review, setReview] = useState({ rating: 0, review: '' });

  const handleChange: ChangeHandlerProps = (evt) => {
    const { name, value } = evt.currentTarget;
    if (name === 'rating') {
      setReview((prev) => ({ ...prev, rating: Number(value) }));
    } else if (name === 'review') {
      setReview((prev) => ({ ...prev, review: value }));
    }
  };

  const stars = [
    { value: 5, label: 'perfect' },
    { value: 4, label: 'good' },
    { value: 3, label: 'not bad' },
    { value: 2, label: 'badly' },
    { value: 1, label: 'terribly' },
  ];

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      comment: review.review,
      rating: review.rating,
    });
  };

  return (
    <form className="reviews__form form" method="post" ref={inputRef} onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map(({value, label}) =>
          (
            <Fragment key={value}>
              <input className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleChange}
                checked={review.rating === value}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={label}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={review.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">5 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 5 || review.rating === 0}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormOffer;
