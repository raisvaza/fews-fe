import { Flex } from '@chakra-ui/react';



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
import { useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart({flexGrow, data, options}) {

  // const [data, setData] = useState(data);

  // const filteredData = {
  //   labels: data.labels,
  //   datasetes: data.datasets.filter((item) => item.label == activeFilterOption)
  // }
    
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            flexGrow={flexGrow}
            width={"50%"}
        >
            {/* <Flex
            width="100vh">
                
            </Flex> */}
            <Line options={options} data={data} />
            
        </Flex>
    )
}