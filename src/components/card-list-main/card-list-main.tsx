import Card from '../card/card';
import Map from '../map/map';
import SortingList from '../sorting-list/sorting-list';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks/useRedux';
import { useState, Fragment } from 'react';
import { SortName } from '../../types';
import { sortingValues } from '../../const';

function CardListMain(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const [sortValue, setSortValue] = useState<SortName>('Popular');
  const activeCity = useAppSelector((state) => state.city);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  let cards = useAppSelector((state) => state.offers).filter((card) => card.city.name === activeCity.name);
  const cardsByPriceLowToHigh = cards.slice().sort((a, b) => a.price - b.price);
  const cardsByPriceHighToLow = cards.slice().sort((a, b) => b.price - a.price);
  const cardsByRated = cards.slice().sort((a, b) => b.rating - a.rating);

  switch(sortValue) {
    case sortingValues[1]: cards = cardsByPriceLowToHigh;
      break;
    case sortingValues[2]: cards = cardsByPriceHighToLow;
      break;
    case sortingValues[3]: cards = cardsByRated;
      break;
    default:
      break;
  }

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cards.length} places to stay in {activeCity.name}</b>
        <SortingList sortValue={sortValue} onSortClick={setSortValue} />
        <div className="cities__places-list places__list tabs__content">
          {cards?.map((card) => (
            <Card key={card.id} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={cards.map(({ id, location }) => ({ id, latitude: location.latitude, longitude: location.longitude, zoom: location.zoom, }))} activeCity={activeCity} activeOffer={activeOffer} />
      </div>
    </Fragment>
  );
}

export default CardListMain;
