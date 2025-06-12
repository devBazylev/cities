import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CityName, OfferProps, SortName, User, UserAuth } from '../types';
import type { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { Token } from '../services/token';
import { History } from 'history';

interface ThunkExtraArg {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set',
  LOGIN_USER: 'user/login',
  FETCH_USER_STATUS: 'user/fetch-status',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const fetchOffers = createAsyncThunk<OfferProps[], undefined, { extra: ThunkExtraArg }>(
  Action.FETCH_OFFERS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<OfferProps[]>(APIRoute.Offers);
    return data;
  }
);
export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: ThunkExtraArg }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  }
);
export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: ThunkExtraArg }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User>(APIRoute.Login, { email, password });
    const { token } = data;

    Token.save(token);
    history.push(AppRoute.Root);

    return email;
  }
);
