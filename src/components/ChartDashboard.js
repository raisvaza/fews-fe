import { Flex, Select, filter } from "@chakra-ui/react"
import LineChart from "./LineChart"
import { useEffect, useState } from "react"

export default function ChartDashboard({ title, data, options, filterOptions}) {

    const [activeFilterOption, setActiveFilterOption] = useState("");
    // const [filteredData, setFilteredData] = useState(data)
    const filteredData = {
        ...data,
        datasets: data.datasets.filter((item) => item.label == activeFilterOption)
    } 

    // if (activeFilterOption !== "") {

    //     setFilteredData()
    // }

    // useEffect(() => {
        
    // }, [activeFilterOption])

    console.log("activeFilterOption:" + activeFilterOption)

    return (
        <Flex
            flexDir={"row"}
            flexGrow={1}>
                <Select
                id="selectButton"
                top={"10vh"}
                left={"50px"}
                flexGrow={0}
                width="200px"
                onChange={() => {
                    const selectOptions = document.getElementById("selectButton").options
                    
                    console.log(selectOptions[selectOptions.selectedIndex].value)
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

                </Select>
                <LineChart 
                    flexGrow={1} 
                    data={activeFilterOption == "all" ? data : filteredData} 
                    options={options} 
                    />
            </Flex>
    )
}