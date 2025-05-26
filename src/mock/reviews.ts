import { getReviewId } from '../utils';
import { ReviewProps } from '../types';

export const reviews: ReviewProps[] = [
  {
    id: getReviewId(),
    img: 'img/avatar-max.jpg',
    user: 'Max',
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
];
