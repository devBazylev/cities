import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { CardListProps } from '../../types';
import { useMap } from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  cards: CardListProps['cards'];
  place?: 'cities' | 'property';
}

function Map ({ cards, place = 'cities' }: MapProps): JSX.Element {
  const locations = cards.map((card) => ({
    latitude: card.location.latitude,
    longitude: card.location.longitude
  }));

  const city = cards[0].city;
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({ latitude: lat, longitude: lng }) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, locations]);

  return <section className={`${place}__map map`} ref={mapRef} />;
}

export default Map;
