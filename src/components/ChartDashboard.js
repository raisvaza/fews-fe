import { Flex, Select, filter } from "@chakra-ui/react"
import LineChart from "./LineChart"
import { useEffect, useState } from "react"

export default function ChartDashboard({ title, data, options, filterOptions, activeData}) {

    const [activeFilterOption, setActiveFilterOption] = useState("all");
    // const [filteredData, setFilteredData] = useState(data)
    const filteredData = {
        ...data,
        datasets: data.datasets.filter((item) => item.label == (activeFilterOption))
    } 

    useEffect(() => {

    }, activeData)

    // if (activeFilterOption !== "") {

    //     setFilteredData()
    // }

    // useEffect(() => {
        
    // }, [activeFilterOption])

    return (
        <Flex
            flexDir={"row"}
            flexGrow={1}
            // left={"500px"}
            alignItems="flex-start"
            justifyContent="space-evenly"
            // padding="0 50px"
            >
                { activeData? null : <Select
                margin="0 50px 0 0"
                id="selectButton"
                // top={"10vh"}
                flexGrow={0}
                width="200px"
                // h="100%"
                onChange={() => {
                    const selectOptions = document.getElementById("selectButton").options
                    
                    setActiveFilterOption(selectOptions[selectOptions.selectedIndex].value)
                }}
                >

                    <option key="all" value="all">Semua Pos</option>                    
                    {
                        filterOptions.map((item, index) => 
                            <option 
                                key={index} 
                                value={item}
                                >
                                    {item}</option>
                        )
                    }

                </Select>}
                
                {/* <Flex
                    flexGrow={1}
                    as="div"
                ></Flex> */}
                <LineChart 
                    
                    data={ activeFilterOption == "all" ? data : filteredData} 
                    options={options} 
                    />
            </Flex>
    )
}