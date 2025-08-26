

import { siteProcess, setCity, setSorting } from './site-process';
import { cities, CityLocation, sortingValues } from '../../const';

describe('Reducer: siteProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        city: {
          name: cities[0],
          location: CityLocation[cities[0]],
        },
        sorting: sortingValues[0]
      });
  });

  it('should set city by a given name', () => {
    const state = {
      city: {
        name: cities[0],
        location: CityLocation[cities[0]],
      },
      sorting: sortingValues[0]
    };

    expect(siteProcess.reducer(state, setCity(cities[1])))
      .toEqual({
        city: {
          name: cities[1],
          location: CityLocation[cities[1]],
        },
        sorting: sortingValues[0]
      });
  });

  it('should set sorting by a given name', () => {
    const state = {
      city: {
        name: cities[0],
        location: CityLocation[cities[0]],
      },
      sorting: sortingValues[0]
    };

    expect(siteProcess.reducer(state, setSorting(sortingValues[1])))
      .toEqual({
        city: {
          name: cities[0],
          location: CityLocation[cities[0]],
        },
        sorting: sortingValues[1]
      });
  });
});
