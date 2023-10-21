import Head from 'next/head'
import Image from 'next/image'

import axios from 'axios'

import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Sidebar from '@/components/Sidebar'

import { Card, CardBody, Flex, Text } from '@chakra-ui/react'

import LeafletMap from '@/components/LeafletMap'
import ChartDashboard from '@/components/ChartDashboard'
import Warning from '@/components/Warning'

import GaugeComponent from '@/components/Gauge'

import { faker } from '@faker-js/faker'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export async function getServerSideProps(context) {
//   const response = await fetch('http://127.0.0.1:8000/get-pos/?format=json');
//   const bedata = await response.json();

//   return {
//     props: {
//       bedata,
//     },
//   };
// }

export function utcToYMDHM(utcDate) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ]
  console.log(utcDate)
  const date = new Date(utcDate)
  const minutes = date.getUTCMinutes();

  const hours = date.getUTCHours();

  const day = date.getUTCDate();

  const month = date.getUTCMonth();

  const year = date.getUTCFullYear();

  return `${day} ${months[month]} ${year} ${hours}:${minutes}`
}

export default function Home({posData, setActiveNav}) {
  const [predict, setPredict] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get-latest-predict/?format=json') 
      .then((response) => setPredict(response.data))
      .catch((error) => console.error(error));
    
  },[])




  const PREDICT_PER_ROW = 4
  
  
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
        <title>Sistem Peringatan Awal Banjir IKN</title>
        <meta name="description" content="Sistem peringatan awal banjir IKN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main className={`${inter.className}`}>
      
          <Flex flexDir="row" className={`${inter.className}`}
          >
            <Sidebar activeMenu={"prediction"} posData={posData} setActiveNav={setActiveNav}/>
                    
            {/* <Flex
            w={"250px"}
            ></Flex> */}
            
            <Flex
                flexDir="column"
                flexGrow={1}
                h="100vh"
                padding="0 50px"
                >
                    
                    <h1 style={{"padding": "20px 10px 0 0", "fontWeight": "bold", "fontSize": "30px"}}>Water Level Prediction</h1>

                    <LeafletMap posData={posData}/>

                    <Text>Prediksi untuk pukul <span style={{"fontWeight": "bold"}}>{predict? 
                      utcToYMDHM(predict[0].predict_for)
                      : null}
                      </span>
                    </Text>
                    <Text fontSize={"12px"}>
                      Prediksi dilakukan setiap 15 menit
                    </Text>

                    <Flex flexDir="column">
                      {
                        predict && posData? predict
                        .slice(0, Math.ceil(predict.length / PREDICT_PER_ROW))
                        .map((rowItem, rowIndex) => 
                          <Flex flexDir="row  " alignItems="flex-start" justifyContent="space-between" key={rowIndex} mt={"20px"}>{
                            predict.slice(rowIndex * PREDICT_PER_ROW, (rowIndex + 1) * PREDICT_PER_ROW).map((predictItem, index) => 
                              <GaugeComponent value={predictItem.predict_value} key={index} posName={
                                posData.filter((posItem) => posItem.id == predictItem.pos_id)[0].nama}
                              />)
                          }</Flex>) : <></>
                      }
                      <Flex flexDir="row  " alignItems="flex-start" justifyContent="space-between">

                        {/* {
                          predict && posData ? predict.map((item, index) => {
                            <GaugeComponent 
                            value={item.predict_value} 
                            posName={posData.filter((posItem) => posItem.id == item.pos_id)} />
                          }) : <></>
                        } */}

                        {
                          // predict && posData? predict.slice(0,4).map((predictItem, index) => <GaugeComponent value={predictItem.predict_value} posName={"ANJING"}/>) : "meh"
                        }

                        {/* <GaugeComponent value={"50"} posName={"Pos Duga Air A"}/>
                        <GaugeComponent value={"50"} posName={"Pos Duga Air A"}/>
                        <GaugeComponent value={"50"} posName={"Pos Duga Air A"}/>
                        <GaugeComponent value={"50"} posName={"Pos Duga Air A"}/> */}
                      
                      </Flex>
                      {/* <Flex flexDir="row" mt="10px">
                        <GaugeComponent value={"50"} posName={"Pos Duga Air A"}/>
                      </Flex> */}
                    </Flex>

                    {/* <ChartDashboard title={title} data={data} options={options} filterOptions={filterOptions}/> */}
                    
            </Flex>
            {/* {} */}
            <Warning warningTitle="Early Warning" posData={posData? posData : null} latestData={predict? predict : null}/>
          </Flex>
        
      </main>
    </>
  )
}
