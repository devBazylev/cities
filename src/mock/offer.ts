import { OfferProps } from '../types';
import { getCardId } from '../utils';

export const cards: OfferProps[] = [
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
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
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
      name: 'Cologne',
      location: {
        latitude: 52.3919553943508,
        longitude: 4.95359666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3919553943508,
      longitude: 4.95359666406198,
      zoom: 1
    },
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3409553943508,
        longitude: 4.90309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3409553943508,
      longitude: 4.90309666406198,
      zoom: 1
    },
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
      name: 'Amsterdam',
      location: {
        latitude: 52.3839553943508,
        longitude: 4.90309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3839553943508,
      longitude: 4.90309666406198,
      zoom: 1
    },
  },
];
