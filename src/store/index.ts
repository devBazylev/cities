import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setOffers } from './action';
import { cards } from '../mock/offer';

export const store = configureStore({reducer});

store.dispatch(setOffers(cards));
