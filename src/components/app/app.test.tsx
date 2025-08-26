import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import App from './app';
import history from '../../browser-history';
import { APIRoute, AppRoute, AuthorizationStatus, cities, CityLocation, sortingValues, StoreSlice } from '../../const';
import { FullOfferProps } from '../../types';
import { createAPI } from '../../services/api';

const user = {
  id: 1,
  name: 'Max',
  avatarUrl: 'img/user-1.jpg',
  isPro: false,
  email: 'max@gmail.com',
  token: 'token123'
};

const offers = [
  {
    id: 1,
    price: 120,
    rating: 4.0,
    description: 'Nice house',
    isPremium: true,
    isFavorite: true,
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

const comments = [
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

const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument({ api })];

mockAPI
  .onGet(`${APIRoute.Offers}/1`)
  .reply(200, offers[0]);

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
  },
  [StoreSlice.SiteProcess]: {
    sorting: sortingValues[0],
    city: {
      name: cities[0],
      location: CityLocation[cities[0]]
    }
  },
  [StoreSlice.SiteData]: {
    offers,
    isOffersLoading: false,
    offer: {
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
    } as FullOfferProps,
    isOfferLoading: false,
    favoriteOffers: offers,
    isFavoriteOffersLoading: false,
    nearbyOffers: [],
    comments,
  },
});

const fakeApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigates to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(`1 places to stay in ${cities[0]}`)).toBeInTheDocument();
    expect(screen.getByText(sortingValues[0])).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText(offers[0].description)).toBeInTheDocument();
  });

  it('should render "Login" when user navigates to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByRole('heading')).toHaveTextContent('Sign in');
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigates to "/favorites"', () => {
    history.push(`${AppRoute.Favorites}`);

    render(fakeApp);

    expect(screen.getByText(offers[0].description)).toBeInTheDocument();
    expect(screen.getByText(offers[0].type)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
    expect(screen.getByRole('img', { name: 'Place' })).toHaveAttribute('src', offers[0].previewImage);
  });

  it('should render "NotFound" when user navigates to "/not-exists"', () => {
    history.push('/not-exists');

    render(fakeApp);

    expect(screen.getByText('Not Found 404')).toBeInTheDocument();
  });

  it('should render "Property" when user navigates to "/offer/:id"', () => {
    history.push(`${AppRoute.Offer}/1`);

    render(fakeApp);

    expect(screen.getByText(offers[0].description)).toBeInTheDocument();
    expect(screen.getByText(offers[0].type)).toBeInTheDocument();
  });
});
