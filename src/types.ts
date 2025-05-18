export type OfferProps = {
  id: number;
  isPremium: boolean;
  img: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: {
    name: string;
  };
  onMouseMove?: () => void;
  onMouseLeave?: () => void;
};

export type CardListProps = {
  cards: OfferProps[];
};
