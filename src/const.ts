import { Location, CityName, OfferProps } from './types';
import markerIcon from './components/map/assets/pin.svg';
import activeMarkerIcon from './components/map/assets/pin-active.svg';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const URL_MARKER_DEFAULT = markerIcon;
const URL_MARKER_CURRENT = activeMarkerIcon;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const CityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 8
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 8
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 8
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 8
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 8
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 8
  },
};

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease= 'Price: low to high',
  PriceDecrease= 'Price: high to low',
  TopRated = 'Top rated first',
}

export const Comparator: {
  [key in Sorting]: (a: OfferProps, b: OfferProps) => number
} = {
  [Sorting.Popular]: () => 0,
  [Sorting.PriceIncrease]: (a: OfferProps, b: OfferProps) => a.price - b.price,
  [Sorting.PriceDecrease]: (a: OfferProps, b: OfferProps) => b.price - a.price,
  [Sorting.TopRated]: (a: OfferProps, b: OfferProps) => b.rating - a.rating,
};

export { URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
