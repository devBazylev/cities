import Card from '../card/card';
import Map from '../map/map';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { useState, Fragment } from 'react';
import SortingList from '../sorting-list/sorting-list';
import { SortName, OfferProps } from '../../types';
import { setSorting } from '../../store/action';
import { Comparator} from '../../const';

function CardListMain(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const activeCity = useAppSelector((state) => state.city);
  const cards = useAppSelector((state) =>
    state.offers
      .filter((offer) => offer.city.name === state.city.name)
      .sort(Comparator[state.sorting] as (a: OfferProps, b: OfferProps) => number)
  );

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cards.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {cards?.map((card) => (
            <Card key={card.id} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={cards.map(({ id, city }) => ({ id, ...city }))} activeCity={activeCity} activeOffer={activeOffer} />
      </div>
    </Fragment>
  );
}

export default CardListMain;
