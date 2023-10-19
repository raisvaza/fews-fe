import ChartDashboard from "@/components/ChartDashboard"
import LeafletMap from '@/components/LeafletMap'
import LineChart from "@/components/LineChart"
// import Map from "@/components/Map"
import Sidebar from "@/components/Sidebar"
import Warning from "@/components/Warning"
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Flex, Select, useStatStyles } from "@chakra-ui/react"
import { faker } from '@faker-js/faker'
import { Inter } from 'next/font/google'
import Head from "next/head"
import { useEffect, useState } from "react"
// import LeafletMap from '@/components/LeafletMap/LeafletMap'
import axios from "axios"
import {utcToYMDHM} from "."

const DATA_WINDOW = 7 //fetch from api

const inter = Inter({ subsets: ['latin'] })

// function getOnlyLatestDataFromEveryPos(data) {
//     return data.map((item) => {item.readings[0]})
// }

export default function Rainfall({posData}){

    const [rainfall, setRainfall] = useState([])
    const [dates, setDates] = useState([])
    const [latestRainfall, setLatestRainfall] = useState([])

    useEffect(() => {
        if (posData != null) {
            axios.get("http://127.0.0.1:8000/get-reading/rainfall?format=json&limit=7")
            .then((response) => { 
                setDates(response.data[0].readings.map((readingItem) => { return utcToYMDHM(readingItem.reading_at)}))
                setLatestRainfall(response.data.map((item) => {return item.readings[DATA_WINDOW-1]}))
                setRainfall(response.data.map(
                (rainfallItem) => {
                    return { 
                        label: posData.filter((posItem) => posItem.id == rainfallItem.pos_id)[0].nama,
                        data: rainfallItem.readings.map((readingItem) => { return readingItem.reading_value}),
                        borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                    }
                }
            ))})
            .catch((error) => {console.error(error)})
        }
        
    }, [posData])


    const title = "Curah Hujan"

    const filterOptions = rainfall.length != 0? rainfall.map((item) => item.label) : []

    const data = {
        labels: dates,
        datasets: rainfall.length != 0? rainfall : [],
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

                            <LeafletMap posData={posData}/>

                            <ChartDashboard title={title} data={data} options={options} filterOptions={filterOptions}/>
                            
                    </Flex>
                    <Warning warningTitle={"Real-Time Rainfall Warning"} latestData={latestRainfall} posData={posData}/>
                </Flex>
            </main>
        </>
        
        
    )
}