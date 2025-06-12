import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CityName, OfferProps, SortName, User, UserAuth } from '../types';
import type { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

// type Extra = {
//   api: AxiosInstance;
//   history: History;
// }

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set',
  LOGIN_USER: 'user/login',
  FETCH_USER_STATUS: 'user/fetch-status',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const fetchOffers = createAsyncThunk<OfferProps[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferProps[]>(APIRoute.Offers);

    return data;
  }
);
export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);

    return data;
  }
);
export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: AxiosInstance }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra: api }) => {
    await api.post<User>(APIRoute.Login, { email, password });
    // const { data } = await api.post<User>(APIRoute.Login, { email, password });

    return email;
  }
);

// export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, Extra>(
//   Action.LOGIN_USER,
//   async ({ email, password }, { extra }) => {
//     const { api, history } = extra;
//     const { data } = await api.post<User>(ApiRoute.Login, { email, password });
//     const { token } = data;

//     Token.save(token);
//     history.push(AppRoute.Root);

//     return email;
//   });
