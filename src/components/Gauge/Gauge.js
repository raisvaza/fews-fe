import { Card, CardBody, Text } from "@chakra-ui/react"
import GaugeComponent from "react-gauge-component"

const waterLevelMetrics = (value) => {
    // if (value >= 1000) {
    //   value = value / 1000;
    //   if (Number.isInteger(value)) {
    //     return value.toFixed(0) + ' mbit/s';
    //   } else {
    //     return value.toFixed(1) + ' mbit/s';
    //   }
    // } else {
    //   return value.toFixed(0) + ' kbit/s';
    // }

  return value + " cm"
}

export default function Gauge({value, posName}) {
    return (
        <Card>
            <CardBody padding={"10px 0px"}>
                <GaugeComponent 
                type="grafana"
                arc={{
                    nbSubArcs: 4,
                    colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
                    width: 0.3,
                    padding: 0.003
                }}
                labels={{
                    valueLabel: {
                    fontSize: 40,
                    formatTextValue: waterLevelMetrics,
                    matchColorWithArc: true,
                    style: {
                        fontSize: "35px", fill: "#fff", textShadow: ""
                    }
                    },
                    tickLabels: {
                    type: "outer",
                    ticks: [
                        { value: 100 },
                        { value: 200 },
                        { value: 300 },
                        { value: 400 },
                        { value: 500 },
                        { value: 600 },
                        { value: 700 },
                        { value: 800 },
                        { value: 900 },
                        { value: 1000 },
                    ],
                    valueConfig: {
                        formatTextValue: waterLevelMetrics
                    }
                    }
                }}
                value={value}
                maxValue={1000}/>
                <Text textAlign={"center"}>{posName}</Text>
            </CardBody>
        </Card>

    )
}