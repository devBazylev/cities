import { ChangeEvent } from 'react';
import { cities, sortingValues } from './const';
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
  location?: Location;
};

export type MapProps = {
  city: City;
  location: Location[];
};

export type OfferProps = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: City;
  onMouseMove?: () => void;
  onMouseLeave?: () => void;
  location: Location;
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

export type User = {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };

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

export type SortName = typeof sortingValues[number];
