import LineChart from "@/components/LineChart"
import Sidebar from "@/components/Sidebar"
import { Flex } from "@chakra-ui/react"

export default function WaterLevel(){
    return (
        <Flex>
            <Sidebar/>
            <LineChart title={"Water Level"}/>
        </Flex>
        
    )
}