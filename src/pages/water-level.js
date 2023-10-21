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
import { useState, useEffect } from "react"
import axios from "axios"
// import LeafletMap from '@/components/LeafletMap/LeafletMap'
import { utcToYMDHM } from "."

const inter = Inter({ subsets: ['latin'] })

const DATA_WINDOW = 7

export default function WaterLevel({posData, activeNav, setActiveNav}){
    const [waterLevel, setWaterLevel] = useState([])
    const [dates, setDates] = useState([])
    const [latestWaterLevel, setLatestWaterLevel] = useState([])
    const [activeWaterLevel, setActiveWaterLevel] = useState("all")


    useEffect(() => {
        if (posData != null) {
            axios.get("http://127.0.0.1:8000/get-reading/water-level?format=json&limit=7")
            .then((response) => { 
                setDates(response.data[0].readings.map((readingItem) => { return utcToYMDHM(readingItem.reading_at)}))
                setLatestWaterLevel(response.data.map((item) => {return item.readings[DATA_WINDOW-1]}))
                setWaterLevel(response.data.map(
                (waterLevelItem) => {
                    return { 
                        label: posData.filter((posItem) => posItem.id == waterLevelItem.pos_id)[0].nama,
                        data: waterLevelItem.readings.map((readingItem) => { return readingItem.reading_value}),
                        borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                    }
                }
            ))})
            .catch((error) => {console.error(error)})
        }
        
    }, [posData])

    useEffect(() => {
        console.log(activeWaterLevel)
    }, [activeWaterLevel])

    const title = "Water Level"

    const filterOptions = waterLevel.length != 0? waterLevel.map((item) => item.label) : []

    const data = {
        labels: dates,
        datasets: waterLevel.length != 0 ? waterLevel : [],
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
            
                <Flex flexDir="row" className={`${inter.className}`}
                >
                    <Sidebar posData={posData} activeMenu={"waterLevel"} setActiveSubMenu={setActiveWaterLevel} activeSubMenu={activeWaterLevel}/>
                    
                    {/* <Flex
                    w={"250px"}
                    ></Flex> */}
                    
                    <Flex
                        flexDir="column"
                        flexGrow={1}
                        h="100vh"
                        padding="0 50px"
                        >
                            
                            <h1 style={{"padding": "20px 10px 0 0", "fontWeight": "bold", "fontSize": "30px", "color": "#1a202c"}}>Real-Time Water Level Observation</h1>

                            <LeafletMap posData={posData}/>

                            <ChartDashboard title={title} data={data} options={options} filterOptions={filterOptions} activeData={activeWaterLevel}/>
                            
                    </Flex>
                    <Warning warningTitle={"Real-Time Water Level Warning"} posData={posData} latestData={latestWaterLevel}/>
                </Flex>
            </main>
        </>
        
        
    )
}