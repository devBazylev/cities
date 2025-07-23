import City from '../city/city';
import { CityName } from '../../types';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { setCity } from '../../store/site-process/site-process';
import { cities } from '../../const';
import { getCity } from '../../store/site-process/selectors';

function CitiesList (): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useAppSelector(getCity);

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
