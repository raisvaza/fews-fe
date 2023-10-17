import { Flex, Select } from "@chakra-ui/react"
import LineChart from "./LineChart"

export default function ChartDashboard() {
    return (
        <Flex
            flexDir={"row"}
            flexGrow={1}>
                <Select
                top={"10vh"}
                left={"50px"}
                flexGrow={0}
                width="150px">

                </Select>
                <LineChart flexGrow={1} title={"Water Level"}/>
            </Flex>
    )
}