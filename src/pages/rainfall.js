import ChartDashboard from "@/components/ChartDashboard"
import LeafletMap from '@/components/LeafletMap'
import LineChart from "@/components/LineChart"
// import Map from "@/components/Map"
import Sidebar from "@/components/Sidebar"
import Warning from "@/components/Warning"
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Flex, Select } from "@chakra-ui/react"
import { faker } from '@faker-js/faker'
import { Inter } from 'next/font/google'
import Head from "next/head"
import { useEffect } from "react"
// import LeafletMap from '@/components/LeafletMap/LeafletMap'

const inter = Inter({ subsets: ['latin'] })

export default function Rainfall(){
    

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

    const title = "Curah Hujan"

    const waterLevelData = [
        {
            label: 'Pos Curah Hujan A',
            data: dates.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Pos Curah Hujan B',
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
        maintainAspectRatio: false,
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
        <>
            <Head>

            </Head>
            <main>
            <Sidebar activeMenu={"rainfall"}/>
                <Flex flexDir="row" className={`${inter.className}`}
                >
                    
                    <Flex
                    w={"250px"}
                    ></Flex>
                    
                    <Flex
                        flexDir="column"
                        flexGrow={1}
                        h="100vh"
                        padding="0 50px"
                        >
                            
                            <h1 style={{"padding": "20px 10px 0 0", "fontWeight": "bold", "fontSize": "30px"}}>Real-Time Rainfall Observation</h1>

                            <LeafletMap/>

                            <ChartDashboard title={title} data={data} options={options} filterOptions={filterOptions}/>
                            
                    </Flex>
                    <Warning/>
                </Flex>
            </main>
        </>
        
        
    )
}