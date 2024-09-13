import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-screen sm:h-[500px] lg:h-[600px] p-4">
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => (
          country.countryInfo.lat !== undefined && country.countryInfo.long !== undefined && (
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]} 
              icon={L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                shadowSize: [41, 41],
              })}
            >
              <Popup>
                <strong>{country.country}</strong><br />
                Active Cases: {country.active}<br />
                Recovered: {country.recovered}<br />
                Deaths: {country.deaths}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
