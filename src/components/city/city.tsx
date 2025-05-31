import type { CityName } from '../../types';
import { Link } from 'react-router-dom';

type CityProps = {
  name: CityName;
  isActive: boolean;
  onClick: (name: CityName) => void;
}

function City ({ name, isActive, onClick }: CityProps): JSX.Element {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <Link to="#" className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default City;
