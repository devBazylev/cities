import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from '../../hooks/useMap';
import { City } from '../../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, CityLocation } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  activeCity: City;
  locations: (City & { id?: number })[];
  activeOffer?: number | null;
  place?: 'cities' | 'property';
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({ activeCity, locations, activeOffer = null, place = 'cities' }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, activeCity);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    markersRef.current.forEach((marker) => {
      map?.removeLayer(marker);
    });
    markersRef.current = [];

    if (map) {
      locations.forEach(({ location: { latitude: lat, longitude: lng }, id }) => {
        const marker = new Marker({ lat, lng });
        const isActive = activeOffer !== null && id !== undefined && id === activeOffer;

        marker
          .setIcon(isActive ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);

        markersRef.current.push(marker);
      });

      const { latitude: lat, longitude: lng } = CityLocation[activeCity.name];
      map.setView({ lat, lng });
    }
  }, [map, activeCity, locations, activeOffer]);

  return <section className={`${place}__map map`} ref={mapRef} />;
}

export default Map;
