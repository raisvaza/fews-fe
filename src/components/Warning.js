import {
    FiHome,
    FiCalendar,
    FiUser,
} from 'react-icons/fi'

import { 
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Card,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Image,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel
 } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import NavItem from './NavItem'

export default function Warning({warningTitle, posData, latestData}) {
    const [navSize, changeNavSize] = useState("large")
    const [normalPos, setNormalPos] = useState([])
    const [waspadaPos, setWaspadaPos] = useState([])
    const [siagaPos, setSiagaPos] = useState([])
    const [awasPos, setAwasPos] = useState([])
    

    // useEffect(() => {

        // if (posData && latestData) {
        //     const posDugaAir = posData.filter((item) => item.tipe == "DugaAir")
        //     setNormalPos([latestData.filter((predict) => {predict.predict_value <= 250}).map((predict, index) => { return {...predict, pos_nama : posDugaAir.nama}})])
        //     setWaspadaPos([latestData.filter((predict) => {predict.predict_value > 250 && predict.predict_value <= 500}).map((predict, index) => { return {...predict, pos_nama : posDugaAir.nama}})])
        //     setNormalPos([latestData.filter((predict) => {predict.predict_value < 250}).map((predict, index) => { return {...predict, pos_nama : posDugaAir.nama}})])
        //     setNormalPos([latestData.filter((predict) => {predict.predict_value < 250}).map((predict, index) => { return {...predict, pos_nama : posDugaAir.nama}})])
        // }

    // }, [posData, latestData])

    return (
        <Flex
            pos="sticky"
            right="0"
            minH="100vh"
            paddingBottom="10px"
            boxShadow="-5px -5px 12px 0 rgba(0, 0, 0, 0.1)"
            w="15vw"
            flexDir="column"
            background="#ffffff"
            // justifyContent="space-between"
        >
            <Flex
                
                flexDir="column"
                w="100%"
                alignItems="center"
                mb={4}
            >
                
                {/* <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Jajang Jaenudin</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex> */}
                <h1  style={{textAlign: "left", padding: "10px",}}>{warningTitle}</h1>
                <Divider display={navSize == "small" ? "none" : "flex"} />    
            </Flex>
            
            
            <Flex
                p="0 5%"
                flexDir="column"
                w="100%"
                alignItems={"center"}
                // as="nav"
            >
                
                <Card width="100%" mt="3" backgroundColor="#49eb34" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='1'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>{latestData ? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) < 250).length : 0}</div>
                            <Heading size="lg">Normal</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#49eb34">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text fontSize="14px">Daftar Pos Duga Air Normal</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                    {/* {latestData ? latestData.filter((item) => item.predict_value > 250).map((item, index) => <Text>{latestData.pos_id_id}</Text>) : null} */}
                                    { latestData && posData? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) < 250).map((item, index) => <Text fontSize={"13px"}>{ posData.filter((pos) => pos.id == item.pos_id)[0].nama }</Text>) : null}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div style={{height: "3px"}}></div>
                    
                        </Stack>
                    {/* </CardBody> */}
                    {/* <Divider /> */}
                    
                </Card>
                <Card width="100%" mt="3" backgroundColor="#cacc2d" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='1'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>{latestData? latestData.filter((item) => (item.predict_value ? item.predict_value : item.reading_value) >= 250 && (item.predict_value? item.predict_value : item.reading_value) < 500).length : null}</div>
                            <Heading size="lg">Waspada</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#cacc2d">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text fontSize="14px">Daftar Pos Duga Air Waspada</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                { latestData && posData? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) >= 250 && (item.predict_value? item.predict_value : item.reading_value) < 500).map((item, index) => <Text fontSize={"13px"}>{ posData.filter((pos) => pos.id == item.pos_id)[0].nama }</Text>) : null}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div style={{height: "3px"}}></div>
                    
                        </Stack>
                    {/* </CardBody> */}
                    {/* <Divider /> */}
                    
                </Card>
                <Card width="100%" mt="3" backgroundColor="#f7a025" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='1'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>{latestData ? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) >= 500 && (item.predict_value? item.predict_value : item.reading_value) < 750).length : null}</div>
                            <Heading size="lg">Siaga</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#f7a025">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    <Text fontSize="14px">Daftar Pos Duga Air Siaga</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                { latestData && posData? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) >= 500 && (item.predict_value? item.predict_value : item.reading_value) < 750).map((item, index) => <Text fontSize={"13px"}>{ posData.filter((pos) => pos.id == item.pos_id)[0].nama }</Text>) : null}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div style={{height: "3px"}}></div>
                    
                        </Stack>
                    {/* </CardBody> */}
                    {/* <Divider /> */}
                    
                </Card>
                <Card width="100%" mt="3" backgroundColor="#f72525" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='3'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>{latestData? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) >= 750).length : null}</div>
                            <Heading size="lg">Awas</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#f72525">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text fontSize="14px">Daftar Pos Curah Hujan Awas</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                { latestData && posData? latestData.filter((item) => (item.predict_value? item.predict_value : item.reading_value) >= 750).map((item, index) => <Text fontSize={"13px"}>{ posData.filter((pos) => pos.id == item.pos_id)[0].nama }</Text>) : null}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div style={{height: "3px"}}></div>
                    
                        </Stack>
                    {/* </CardBody> */}
                    {/* <Divider /> */}
                    
                </Card>

                {/* <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                /> */}
                {/* <NavItem navSize={navSize} icon={FiHome} title="Prediksi" description="This is the description for the dashboard." to="/"/>
                <NavItem navSize={navSize} icon={FiCalendar} title="Pos Duga Air" to="/water-level"/>
                <NavItem navSize={navSize} icon={FiUser} title="Pos Curah Hujan" to="rainfall" /> */}
                {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" /> */}
                {/* <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
            </Flex>

            
        </Flex>
    )
}