import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CityName, OfferProps, SortName } from '../types';
import type { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/set',
  // SET_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
// export const setOffers = createAction<OfferProps[]>(Action.SET_OFFERS);
export const fetchOffers = createAsyncThunk<OfferProps[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferProps[]>(APIRoute.Offers);

    return data;
  });
