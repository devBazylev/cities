import { OfferProps } from '../types';
import { getCardId } from '../utils';

export const cards: OfferProps[] = [
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-01.jpg',
    price: 182,
    isMarked: false,
    rating: 3.3,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8909553943508,
        longitude: 1.95309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-02.jpg',
    price: 93,
    isMarked: false,
    rating: 4.1,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.7909553943508,
        longitude: 2.40300666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-03.jpg',
    price: 126,
    isMarked: true,
    rating: 3.8,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.6009553943508,
        longitude: 2.35309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-04.jpg',
    price: 195,
    isMarked: true,
    rating: 2.6,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.5009553943508,
        longitude: 2.46809666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-05.jpg',
    price: 184,
    isMarked: false,
    rating: 2.3,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Cologne',
      location: {
        latitude: 51.3909553943508,
        longitude: 6.85309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-06.jpg',
    price: 99,
    isMarked: false,
    rating: 1.1,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Cologne',
      location: {
        latitude: 51.1901553943508,
        longitude: 6.15309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-07.jpg',
    price: 121,
    isMarked: true,
    rating: 2.6,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Cologne',
      location: {
        latitude: 51.3909553943508,
        longitude: 7.05309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-08.jpg',
    price: 84,
    isMarked: false,
    rating: 4.4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.3919553943508,
        longitude: 4.95359666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-09.jpg',
    price: 122,
    isMarked: true,
    rating: 3.4,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.6919553943508,
        longitude: 4.55359666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-10.jpg',
    price: 115,
    isMarked: false,
    rating: 5,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.7919553943508,
        longitude: 4.45359666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-11.jpg',
    price: 120,
    isMarked: true,
    rating: 3.8,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-12.jpg',
    price: 80,
    isMarked: false,
    rating: 4.4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3919553943508,
        longitude: 4.95359666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-13.jpg',
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
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-14.jpg',
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
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-15.jpg',
    price: 162,
    isMarked: true,
    rating: 4.7,
    description: 'Canal View Prinsengracht',
    type: 'house',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.3409553943508,
        longitude: 9.90309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-16.jpg',
    price: 175,
    isMarked: true,
    rating: 2.6,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.3499553943508,
        longitude: 9.40309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: true,
    img: 'img/apartment-17.jpg',
    price: 169,
    isMarked: true,
    rating: 3.8,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.3909553943508,
        longitude: 6.85309666406198,
        zoom: 10
      }
    },
  },
  {
    id: getCardId(),
    isPremium: false,
    img: 'img/apartment-18.jpg',
    price: 45,
    isMarked: false,
    rating: 4.4,
    description: 'Wood and stone place',
    type: 'room',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.0709553943508,
        longitude: 6.30909666406198,
        zoom: 10
      }
    },
  },
];
