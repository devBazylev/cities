import { sortingValues } from '../../const';
import { SortName } from '../../types';
import { useState } from 'react';

type SortingListProps = {
  sortValue: SortName;
  onSortClick: (value: SortName) => void;
};

function SortingList ({ sortValue, onSortClick }: SortingListProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggler = () => {
    setIsOpened((prev) => !prev);
  };

  const handleOptionClick = (value: SortName) => {
    handleToggler();
    onSortClick(value);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggler}>
        {sortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {sortingValues.map((value) => (
          <li key={value} className={`places__option ${value === sortValue ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => handleOptionClick(value)}>{value}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortingList;
