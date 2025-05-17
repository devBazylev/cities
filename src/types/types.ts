export type OfferMock = {
  id?: number;
  isPremium: boolean;
  img: string;
  price: number;
  isMarked: boolean;
  rating: number;
  description: string;
  place: string;
};

export type IndexProps = {
  offersCount: number;
  cards: OfferMock;
};
