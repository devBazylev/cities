import type { CityName } from '../../types';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks/useRedux';
import { setCity } from '../../store/action';
import City from '../city/city';
import { cities } from '../../const';

function CitiesList (): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleClick = (name: CityName) => {
    dispatch(setCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleClick} />
      ))}
    </ul>
  );
}

export default CitiesList;
