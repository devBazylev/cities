import type { ChangeEvent } from 'react';
import { AuthorizationStatus, cities } from './const';

export type CityName = typeof cities[number];

export type Locations = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: CityName;
  locations: Locations;
}

export type MapProps = {
  city: City;
  locations: Locations[];
}

export type OfferProps = {
  id: number;
  isPremium: boolean;
  img: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  locations: Locations;
  city: City;
  onMouseMove?: () => void;
  onMouseLeave?: () => void;
};

export type AuthorizationProps = {
  authorizationStatus: AuthorizationStatus;
}

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
