import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';
// import { fetchOffers } from './action';

export const api = createAPI();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
// import { setOffers } from './action';
// import { cards } from '../mock/offer';

// export const store = configureStore({reducer});

// store.dispatch(setOffers(cards));
