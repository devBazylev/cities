import { cards } from './mock/offer';
import { Location, CityName } from './types';
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

export const Settings = {
  OffersCount: cards.length,
};

export const CityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
};

export { URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
