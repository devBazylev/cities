import Card from '../card/card';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useRedux';
import { useState, Fragment } from 'react';
import FormSorting from '../form-sorting/form-sorting';

/* eslint-disable */
// @ts-ignore
function CardList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const cards = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  // eslint-disable-next-line no-console
  console.log(cards);

  const handleMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cards.length} places to stay in {activeCity.name}</b>
        <FormSorting />
        <div className="cities__places-list places__list tabs__content">
          {cards?.map((card) => (
            <Card key={card.id} {...card} onMouseMove={() => handleMouseMove(card.id)} onMouseLeave={handleMouseLeave} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={activeCity} cards={cards} />
      </div>
    </Fragment>
  );
}

export default CardList;
