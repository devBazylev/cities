import { createReducer } from '@reduxjs/toolkit';
import { City, OfferProps, SortName } from '../types';
import { setCity, setOffers, setSorting } from './action';
import { cities, CityLocation, sortingValues } from '../const';

type State = {
  city: City;
  offers: OfferProps[];
  sorting: SortName;
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sorting: sortingValues[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
