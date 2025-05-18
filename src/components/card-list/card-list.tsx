import type { CardListProps } from '../../types';
import Card from '../card/card';

function CardList({ cards }: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default CardList;
