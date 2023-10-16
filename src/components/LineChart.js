import { Flex } from '@chakra-ui/react';

import { faker } from '@faker-js/faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';

import Sidebar from './Sidebar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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

// Print the generated dates
dates.forEach((date, index) => {
  console.log(`Date ${index + 1}: ${date}`);
});



const data = {
  labels: dates,
  datasets: [
    {
      label: 'Sungai A',
      data: dates.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export default function LineChart({title}) {
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
        <Flex
            flexDir="column"
            alignItems="center"
            flexGrow={1}
        >
            <Flex
            width="100vh">
                
            </Flex>
            <Line options={options} data={data} />;
            
        </Flex>
    )
}