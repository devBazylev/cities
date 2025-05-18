import type { CardListProps } from '../../types';
import Card from '../card/card';
import { useState } from 'react';

function CardList({ cards }: CardListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards?.map((card) => (
        <Card key={card.id} {...card}
          onMouseMove={() => setActiveOffer(card.id)}
          onMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </div>
  );
}

export default CardList;
