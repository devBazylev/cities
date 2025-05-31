import type { CardListProps } from '../../types';
import Card from '../card/card';
import { useState } from 'react';

type ListProps = {
  cards: CardListProps['cards'];
  wrapName?: 'cities' | 'near-places' | 'favorites';
}

function CardListOffer({ cards, wrapName = 'cities' }: ListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const displayedCards = (wrapName === 'near-places' && cards.length > 3) ? cards.slice(0, 3) : cards;

  return (
    <div className='near-places__list places__list'>
      {displayedCards?.map((card) => (
        <Card key={card.id} wrapName={wrapName} {...card}
          onMouseMove={() => setActiveOffer(card.id)}
          onMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </div>
  );
}

export default CardListOffer;
