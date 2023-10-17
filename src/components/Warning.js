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

import { useState } from 'react'
import NavItem from './NavItem'

export default function Warning() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            right="0"
            h="fit-content"
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
                <h1  style={{textAlign: "left", padding: "10px",}}>Early Warning</h1>
                <Divider display={navSize == "small" ? "none" : "flex"} />    
            </Flex>
            
            
            <Flex
                p="0 5%"
                flexDir="column"
                w="100%"
                alignItems={"center"}
                // as="nav"
            >
                
                <Card width="100%" backgroundColor="#49eb34" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='1'>
                        <Flex as="div" alignItems="center" flexDir="column" >
                            <div style={{fontSize: "80px", height: "min-content"}}>5</div>
                            <Heading size="lg" >Normal</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#49eb34">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Daftar Pos Curah Hujan Normal
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <div>a</div>
                                    <div>a</div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <div style={{height: "1px"}}></div>
                    
                        </Stack>
                    {/* </CardBody> */}
                    {/* <Divider /> */}
                    
                </Card>
                <Card width="100%" mt="3" backgroundColor="#cacc2d" color="white" >
                    {/* <CardBody > */}
                        
                        <Stack spacing='3'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>5</div>
                            <Heading size="lg">Waspada</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#cacc2d" defaultIsOpen={false}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Daftar Pos Curah Hujan Waspada
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                    <div>a</div>
                                    <div>a</div>
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
                        
                        <Stack spacing='3'>
                        <Flex as="div" alignItems="center" flexDir="column">
                            <div style={{fontSize: "80px", height: "100px"}}>5</div>
                            <Heading size="lg">Siaga</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#f7a025">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Daftar Pos Curah Hujan Siaga
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                    <div>a</div>
                                    <div>a</div>
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
                            <div style={{fontSize: "80px", height: "100px"}}>5</div>
                            <Heading size="lg">Awas</Heading>
                        </Flex>
                        
                        <Accordion allowMultiple>
                            <AccordionItem borderColor="#f72525">
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Daftar Pos Curah Hujan Awas
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} >
                                    <div>a</div>
                                    <div>a</div>
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