import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'

const customIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" width="32" height="32">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

interface Coordinate {
  lat: number;
  long: number;
}

interface MapProps {
  coordinates?: Coordinate[];
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 13);
  }, [map, center]);

  return null;
}

export default function Map({ coordinates = [] }: MapProps){
    const defaultCenter = [51.505, -0.09];
    const mapCenter = coordinates.length > 0
      ? [coordinates[coordinates.length - 1].lat, coordinates[coordinates.length - 1].long]
      : defaultCenter;

    return <div className='rounded-lg overflow-hidden shadow-lg'>
        <MapContainer center={mapCenter as [number, number]} style={{width: '100%', height: 400}} zoom={13} scrollWheelZoom={false}>
            <MapUpdater center={mapCenter as [number, number]} />
            <TileLayer
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
              url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            />
            {coordinates.length > 0 ? (
              coordinates.map((coord, index) => (
                <Marker
                  key={index}
                  position={[coord.lat, coord.long]}
                  icon={customIcon}
                >
                  <Popup>
                    Lokasyon {index + 1}: {coord.lat}, {coord.long}
                  </Popup>
                </Marker>
              ))
            ) : (
              <Marker position={defaultCenter as [number, number]} icon={customIcon}>
              </Marker>
            )}
          </MapContainer>
    </div>
}