import { NavLink } from 'react-router-dom';

function Locations({id}: {id: number}, {city}: {city: string}): JSX.Element {
  return (
    <li className="locations__item" key={id}>
      <NavLink to={`/${city.toLowerCase()}`} className={({isActive}: {isActive: boolean}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}>
        <span>{city}</span>
      </NavLink>
    </li>
  );
}

export default Locations;
