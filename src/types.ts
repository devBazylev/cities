import { ChangeEvent } from 'react';
import { AuthorizationStatus, cities, Sorting } from './const';
import { store } from './store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CityName = typeof cities[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export type MapProps = {
  city: City;
  location: Location[];
};

export type OfferProps = {
  id: number;
  isPremium: boolean;
  img: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: City;
  onMouseMove?: () => void;
  onMouseLeave?: () => void;
};

export type ReviewProps = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro?: boolean;
  };
};

export type AuthorizationProps = {
  authorizationStatus: AuthorizationStatus;
};

export type PrivateRouteProps = AuthorizationProps & {
  children: JSX.Element;
};

export type CardListProps = {
  cards: OfferProps[];
};

export type OfferForm = {
  rating: number | null;
  text: string;
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange?: (rating: number) => void;
  onSubmit?: (evt: React.FormEvent) => void;
};

export type SortName= keyof typeof Sorting;
