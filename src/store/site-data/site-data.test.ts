import type { OfferProps, Comment } from '../../types';

import { siteData } from './site-data';
import { cities, CityLocation } from '../../const';
import { fetchComments, fetchFavoriteOffers, fetchNearbyOffers, fetchOffer, fetchOffers, postComment, postFavorite } from '../action';

const offers: OfferProps[] = [
  {
    id: 1,
    price: 120,
    rating: 4.0,
    description: 'Nice house',
    isPremium: true,
    isFavorite: false,
    city: {
      name: cities[0],
      location: CityLocation[cities[0]]
    },
    location: CityLocation[cities[0]],
    previewImage: 'img/1.jpg',
    type: 'hotel',
    isMarked: false
  }
];

const comments: Comment[] = [
  {
    id: '1',
    comment: 'Hello!',
    date: '11-10-2017',
    rating: 1.0,
    user: {
      avatarUrl: 'img/user-1.jpg',
      id: 1,
      isPro: false,
      name: 'Max'
    }
  }
];

describe('Reducer: siteData', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: fetchOffers.pending.type }))
      .toEqual({
        offers: [],
        isOffersLoading: true,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, { type: fetchOffers.fulfilled.type, payload: offers }))
      .toEqual({
        offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, { type: fetchOffers.rejected.type }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch offer', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: fetchOffer.pending.type }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    const fullOffer = {
      ...offers[0],
      title: offers[0].description,
      bedrooms: 1,
      maxAdults: 2,
      goods: [],
      images: [offers[0].previewImage],
      host: {
        name: 'Имя хоста',
        avatarUrl: 'img/avatar.svg',
        isPro: false,
      },
    };

    expect(siteData.reducer(state, { type: fetchOffer.fulfilled.type, payload: fullOffer }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: fullOffer,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, { type: fetchOffer.rejected.type }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch favorite offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: fetchFavoriteOffers.pending.type }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: true,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, { type: fetchFavoriteOffers.fulfilled.type, payload: offers }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: offers,
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, { type: fetchFavoriteOffers.rejected.type }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch nearby offers', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: fetchNearbyOffers.fulfilled.type, payload: offers }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: offers,
        comments: [],
      });
  });

  it('should fetch nearby comments', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: fetchComments.fulfilled.type, payload: comments }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });

  it('should post comment', () => {
    const state = {
      offers: [],
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: postComment.fulfilled.type, payload: comments }))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });

  it('should post favorite', () => {
    const state = {
      offers,
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [] as OfferProps[],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, { type: postFavorite.fulfilled.type, payload: {...offers[0], isFavorite: true } }))
      .toEqual({
        offers: [{...offers[0], isFavorite: true }],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [{...offers[0], isFavorite: true }],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    state.offers = [{...offers[0], isFavorite: true }];
    state.favoriteOffers = [{...offers[0], isFavorite: true }];

    expect(siteData.reducer(state, { type: postFavorite.fulfilled.type, payload: {...offers[0], isFavorite: false } }))
      .toEqual({
        offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });
});
