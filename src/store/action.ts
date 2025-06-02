import { createAction } from '@reduxjs/toolkit';
import type { CityName, OfferProps, SortName } from '../types';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<OfferProps[]>(Action.SET_OFFERS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
