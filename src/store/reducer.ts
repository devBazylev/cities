import { createReducer } from '@reduxjs/toolkit';
import { City, OfferProps } from '../types';
import { setCity, setOffers } from './action';
import { cities, CityLocation} from '../const';

type State = {
  city: City;
  offers: OfferProps[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: []
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
    });
});
