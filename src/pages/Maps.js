import React, { useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { AutoComplete } from 'antd';
import { useDispatch } from 'react-redux';
import { add } from '../hooks/useHistory';

import '../assets/css/index.css';
import location from  '../assets/images/location.png'
import { MockData } from '../MockData';

const MAP_KEY = ""
export const Maps = () => {
    const defaultProps = {
        center: {
          lat: 3.1517,
          lng: 101.7020
        },
        zoom: 16
    };
    
    const [center, setCenter] = useState(defaultProps.center)
    const dispatch = useDispatch();
    
    const MarkerComponent = () => <img src={location} className='marker'  />;

    const handleSelect = (data) => {
        let ind = MockData.findIndex((x) => x.value === data)
        let newCenter = { lat: MockData[ind].lat, lng: MockData[ind].lng}

        let toStore = {
            ...MockData[ind],
        }
        dispatch(add(toStore))
        setCenter(newCenter)
    };

    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <AutoComplete
                style={{
                    width: 400,
                    border: '1px solid black',
                    borderRadius:6,
                    position:'absolute',
                    zIndex:1,
                    top: '50px',
                    transform: 'translate(-50%, -50%)'
                }}
                options={MockData}
                placeholder="Type in the location name"
                onSelect={handleSelect}
                filterOption={(inputValue, option) =>  
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                
                }  
            />

            <GoogleMapReact
                bootstrapURLKeys={{ key: MAP_KEY }}
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
