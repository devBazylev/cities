import { createReducer } from '@reduxjs/toolkit';
import { City, OfferProps, SortName, User, FullOfferProps, Comment } from '../types';
import { setCity, fetchOffers, fetchOffer, setSorting, fetchUserStatus, loginUser, fetchNearbyOffers, fetchComments, postComment } from './api-action';
import { cities, CityLocation, sortingValues, AuthorizationStatus } from '../const';

type State = {
  city: City;
  offers: OfferProps[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
  offer: FullOfferProps | null;
  nearbyOffers: OfferProps[];
  comments: Comment[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  isOfferLoading: false,
  sorting: sortingValues[0],
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  offer: null,
  nearbyOffers: [],
  comments: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
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
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});
