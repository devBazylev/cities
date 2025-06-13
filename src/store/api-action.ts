import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CityName, OfferProps, SortName, User, UserAuth, FullOfferProps, Comment } from '../types';
import type { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { saveToken } from '../services/token';
import { History } from 'history';

interface ThunkExtraArg {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  LOGIN_USER: 'user/login',
  SET_CITY: 'city/set',
  SET_SORTING: 'sorting/set',
  FETCH_OFFER: 'offers/fetch',
  FETCH_OFFERS: 'offers/set',
  FETCH_USER_STATUS: 'user/fetch-status',
  FETCH_NEARBY_OFFERS: 'offers/fetch-nearby',
  FETCH_COMMENTS: 'offer/fetch-comments',
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
export const fetchOffer = createAsyncThunk<FullOfferProps, FullOfferProps['id'], { extra: ThunkExtraArg }>(
  Action.FETCH_OFFER,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<FullOfferProps>(`${APIRoute.Offers}/${id}`);

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

    saveToken(token);
    history.push(AppRoute.Root);

    return email;
  }
);
export const fetchNearbyOffers = createAsyncThunk<FullOfferProps[], FullOfferProps['id'], { extra: ThunkExtraArg }>(
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<FullOfferProps[]>(`${APIRoute.Offers}/${id}/nearby`);

    return data;
  }
);

export const fetchComments = createAsyncThunk<Comment[], FullOfferProps['id'], { extra: ThunkExtraArg }>(
  Action.FETCH_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);

    return data;
  }
);
