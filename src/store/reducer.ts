import { createReducer } from '@reduxjs/toolkit';
import { City, OfferProps, SortName } from '../types';
import { setCity, fetchOffers, setSorting } from './action';
import { cities, CityLocation, sortingValues, AuthorizationStatus } from '../const';

type State = {
  city: City;
  offers: OfferProps[];
  isOffersLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  sorting: sortingValues[0],
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
