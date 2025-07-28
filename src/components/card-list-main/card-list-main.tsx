import Card from '../card/card';
import Map from '../map/map';
import SortingList from '../sorting-list/sorting-list';
import Spinner from '../spinner/spinner';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { SortName } from '../../types';
import { getCity, getSorting } from '../../store/site-process/selectors';
import { getIsOffersLoading, selectOffers } from '../../store/site-data/selectors';
import { setSorting } from '../../store/site-process/site-process';
import CardListEmpty from '../card-list-empty/card-list-empty';

function CardListMain(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const activeCity = useAppSelector(getCity);
  const sortValue = useAppSelector(getSorting);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const cards = useAppSelector(selectOffers);

  const isEmpty = cards.length === 0;

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  const handleSortClick = (value: SortName) => {
    dispatch(setSorting(value));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className={`cities__places-container container${isEmpty ? ' cities__places-container page__main--index-empty' : ''}`}>
      {isEmpty ? <CardListEmpty city={activeCity.name} /> : (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cards.length} places to stay in {activeCity.name}</b>
          <SortingList sortValue={sortValue} onSortClick={handleSortClick} />
          <div className="cities__places-list places__list tabs__content">
            {cards?.map((card) => (
              <Card key={card.id} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} />
            ))}
          </div>
        </section>
      )}
      <div className="cities__right-section">
        {!isEmpty && <Map locations={cards.map(({ id, location }) => ({ id, latitude: location.latitude, longitude: location.longitude, zoom: location.zoom, }))} activeCity={activeCity} activeOffer={activeOffer} />}
      </div>
    </div>
  );
}

export default CardListMain;
