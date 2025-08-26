import { render, screen, renderHook } from '@testing-library/react';
import { Map } from 'leaflet';

import { cities, CityLocation } from '../../const';
import { useMap } from './useMap';

const DummyComponent = () => <div data-testid="dummy"></div>;

const city = {
  name: cities[0],
  location: CityLocation[cities[0]]
};

describe('Hook: useMap', () => {
  it('should return map', () => {
    render(<DummyComponent />);
    const mapContainer = screen.getByTestId('dummy');

    expect(mapContainer).toBeEmptyDOMElement();

    const { result } = renderHook(() =>
      useMap({ current: mapContainer}, city),
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Map);
    expect(mapContainer).not.toBeEmptyDOMElement();
  });
});
