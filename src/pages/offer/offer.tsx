import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import CardListOffer from '../../components/card-list-offer/card-list-offer';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchFavoriteOffers } from '../../store/api-action';

function Property(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className="page">
      <HelmetProvider >
        <title>Страница предложения</title>
      </HelmetProvider >
      <Header>
        <Nav />
      </Header>
      <main className="page__main page__main--property">
        <CardListOffer />
      </main>
    </div>
  );
}

export default Property;
