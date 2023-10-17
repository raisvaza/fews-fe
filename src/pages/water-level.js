import ChartDashboard from "@/components/ChartDashboard"
import LineChart from "@/components/LineChart"
import Map from "@/components/Map"
import Sidebar from "@/components/Sidebar"
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Flex, Select } from "@chakra-ui/react"

export default function WaterLevel(){
    return (
        <Flex flexDir="row"
        >
            <Sidebar/>
            {/* <Flex flexDir="column">
                <Select>
                    <option>Pos Duga Air 1</option>
                </Select>
            </Flex> */}
            <Flex
                flexDir="column"
                flexGrow={1}
                >
                    {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                    {/* <Map/> */}
                    <ChartDashboard/>
            </Flex>
            
            
        </Flex>
        
    )
}