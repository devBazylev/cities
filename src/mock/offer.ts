import { OfferProps } from '../types';
import { getNextId } from '../utils';

export const Cards: OfferProps[] = [
  {
    id: getNextId(),
    isPremium: true,
    img: 'img/apartment-01.jpg',
    price: 120,
    isMarked: false,
    rating: 3.8,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: getNextId(),
    isPremium: false,
    img: 'img/room.jpg',
    price: 80,
    isMarked: true,
    rating: 4.4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },
  {
    id: getNextId(),
    isPremium: false,
    img: 'img/apartment-02.jpg',
    price: 132,
    isMarked: false,
    rating: 3.4,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Paris'
    }
  },
  {
    id: getNextId(),
    isPremium: true,
    img: 'img/apartment-03.jpg',
    price: 180,
    isMarked: false,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Amsterdam'
    }
  },
];
