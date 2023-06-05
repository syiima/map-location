import React, { useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { AutoComplete } from 'antd';

import '../assets/css/index.css';
import { MockData } from '../MockData';

export const Maps = () => {
    const defaultProps = {
        center: {
          lat: 3.1517,
          lng: 101.7020
        },
        zoom: 13
    };
    
    const [center, setCenter] = useState(defaultProps.center)

    const MarkerComponent = () => <div className='marker'/>;

    const handleSelect = (data) => {
        // console.log('onSelect', data);
        let ind = MockData.findIndex((x) => x.value === data)
        let newCenter = { lat: MockData[ind].lat, lng: MockData[ind].lng}

        setCenter(newCenter)
        // console.log('ddd', MockData[ind]);
    };


    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <AutoComplete
                style={{
                    width: 200,
                    position:'absolute',
                    zIndex:1,
                    top: '20px'
                }}
                options={MockData}
                placeholder="Type in the location name"
                onSelect={handleSelect}
                
                filterOption={(inputValue, option) =>  
                // console.log('oiii', inputValue, option.name);
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                
                }  
            />

            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBl6-E8tQcbe8c3lXzV_oplVrF-PgFZVoo" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={center}
                options={{
                    scrollwheel: false, disableDefaultUI: true,
                  }}
            >
                <MarkerComponent
                    lat={center.lat}
                    lng={center.lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}
