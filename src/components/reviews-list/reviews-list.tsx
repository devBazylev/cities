import { ReactNode } from 'react';

function ReviewsList({children}: { children?: ReactNode }): JSX.Element {
  return (
    <ul className="reviews__list">
      {children}
    </ul>
  );
}

export default ReviewsList;
