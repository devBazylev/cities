import { OfferProps } from '../types';
import { getCardId } from '../utils';

export const Cards: OfferProps[] = [
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-01.jpg',
    price: 120,
    isMarked: true,
    rating: 3.8,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/room.jpg',
    price: 80,
    isMarked: false,
    rating: 4.4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Paris'
      // name: 'Dusseldorf'
    }
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-02.jpg',
    price: 132,
    isMarked: true,
    rating: 3.4,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Brussels'
      // name: 'Amsterdam'
    }
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-03.jpg',
    price: 155,
    isMarked: true,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Cologne'
      // name: 'Hamburg'
    }
  },
];
