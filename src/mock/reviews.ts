import { getReviewId } from '../utils';
import { ReviewProps } from '../types';

export const reviews: ReviewProps[] = [
  {
    id: getReviewId(),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    rating: 4.2,
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    }
  },
  {
    id: getReviewId(),
    comment: ' The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2021-02-12',
    rating: 2.8,
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    }
  },
];
