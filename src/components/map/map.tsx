import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'

const Map = () => {
  return (
    <div className="container p-0">
      <MapContainer
        center={[11.379504, 77.787259]} // Initial map center coordinates
        zoom={13} // Initial zoom level
        style={{ height: '350px', width: '100%' }} // Adjust the map's height and width
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' // Tile layer URL
        />
        <Marker position={[11.379504, 77.787259]}> {/* Marker coordinates */}
          <Popup>
            <div className='d-flex align-items-center'>
              <img src="./location.svg" alt="location-logo" width={30} />
              <h3 className='m-0'>Home</h3>
            </div>
            <div>
              <p>6/128-7, Indra nagar, Vellikuttai, <br /> Elandha Kuttai, Namakkal.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
