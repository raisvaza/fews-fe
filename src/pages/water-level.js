import ChartDashboard from "@/components/ChartDashboard"
import LineChart from "@/components/LineChart"
// import Map from "@/components/Map"
import Sidebar from "@/components/Sidebar"
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Flex, Select } from "@chakra-ui/react"
import { faker } from '@faker-js/faker'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function WaterLevel(){
    

    // Define the initial date and an array to store the generated dates
    const startDate = new Date(); // Use the current date and time as the starting point
    const dates = [];

    // Generate 7 dates with a 15-minute difference
    for (let i = 0; i < 7; i++) {
    // Create a new date by adding 15 minutes (in milliseconds) to the previous date
    const newDate = new Date(startDate.getTime() + i * 15 * 60 * 1000);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(newDate.getDate()).padStart(2, '0');
    const hour = String(newDate.getHours()).padStart(2, '0');
    const minute = String(newDate.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}/${month}/${day} ${hour}:${minute}`;
    dates.push(formattedDate);
    }

    const title = "Water Level"

    const waterLevelData = [
        {
            label: 'Pos Duga Air A',
            data: dates.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Pos Duga Air B',
            data: dates.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ]

    const filterOptions = waterLevelData.map((item) => item.label)

    const data = {
        labels: dates,
        datasets: waterLevelData,
    };
    
    const options = {
        responsive: true,
        layout: {
            padding: {
                left: 100,
                right: 100,
                top: 20,
                bottom: 20
            },
            
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 1000
            }
        },
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: title,
            },
        },
    };


    return (
        <Flex flexDir="row" className={`${inter.className}`}
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
                    
                    <ChartDashboard title={title} data={data} options={options} filterOptions={filterOptions}/>
            </Flex>
            
            
        </Flex>
        
    )
}