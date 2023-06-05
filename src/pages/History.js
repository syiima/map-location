import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, List } from 'antd';

import { remove, selectHistory } from '../hooks/useHistory'
import '../assets/css/App.css';
import location from '../assets/images/location.png';


export const History = () => {
    const history = useSelector(selectHistory)
    const dispatch = useDispatch();

    return(
        <div >
            <h2>Search History</h2>
            <br/>

            {history.length !== 0 ? 
                <List
                    itemLayout="horizontal"
                    dataSource={history}
                    renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            style={{alignItems:'center',marginLeft:'10px', marginRight:'10px' }}
                            avatar={<Avatar src={location} />}
                            title={item.value}
                            description={"Latitude: " + item.lat + ' , Longitude : ' + item.lng}
                        />
                    </List.Item>
                )}
            />
            : <div>Search for a location in <i>Maps</i> to get a history.</div>}

        </div>
    )
}
