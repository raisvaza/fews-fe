import 'leaflet/dist/leaflet.css'
import styles from '@/styles/LeafletMap.module.css'
import { Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import { Circle, Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'

import axios from 'axios'

const fillBlueOptions = { fillColor: 'blue' }
const fillRedOptions = { color: 'red'}
// const center = [-0.9729638406850295, 116.70890360287241]


// const icon = L.icon({ iconUrl: "../../../public/marker-icon-red.png"})

export default function LeafletMap({posData}) {
    // const [pos, setPos] = useState(posData);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/get-pos/?format=json') 
    //     .then((response) => setPos(response.data))
    //     .catch((error) => console.error(error));
        
    // },[])
    // console.log("posData in LeafletMap from APP:", posData)

    return (
        <Flex className={styles.mapContainer}>
            <MapContainer className={styles.map} center={[-0.9934612930750077, 116.70411071751876]} zoom={12} scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                ></TileLayer>

                {
                    posData? posData.map((item, index) => (
                        <Circle 
                            center={[item.latitude, item.longitude]} 
                            pathOptions={item.tipe == "DugaAir" ? fillRedOptions : fillBlueOptions} 
                            radius={200} 
                            key={index}
                        />
                    )) : null
                    
                }
                

                
            </MapContainer>
        </Flex>
        
    )
}