import type { ChangeEvent } from 'react';
import { AuthorizationStatus } from './const';

export type OfferProps = {
  id: number;
  isPremium: boolean;
  img: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: {
    name: string;
  };
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
  rating?: number | null;
  text?: string;
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange?: (rating: number) => void;
  onSubmit?: (evt: React.FormEvent) => void;
};
