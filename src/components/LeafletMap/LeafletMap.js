import 'leaflet/dist/leaflet.css'
import styles from '@/styles/LeafletMap.module.css'
import { Flex } from '@chakra-ui/react'

import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map() {
    return (
        <Flex className={styles.mapContainer}>
            <MapContainer className={styles.map} center={[-0.9729638406850295, 116.70890360287241]} zoom={13} scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                ></TileLayer>
            </MapContainer>
        </Flex>
        
    )
}