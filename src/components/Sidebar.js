import Link from 'next/link'

import styles from '@/styles/Navbar.module.css'

import { useEffect } from 'react'

import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'

import {BiWater} from 'react-icons/bi'

import { BsCloudRainHeavy} from 'react-icons/bs'

import { 
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel } from '@chakra-ui/react'

import { useState } from 'react'
import NavItem from './NavItem'

export default function Sidebar({activeMenu, posData, setActiveSubMenu, activeSubMenu}) {
    const [navSize, changeNavSize] = useState("large")

    // const [activeMenu, changeActiveMenu] = useState(menu)

    useEffect(() => {
        console.log(posData)
    }, [posData])

    return (
        <Flex
            pos="sticky"
            left="0"
            
            boxShadow="5px 5px 12px 0 rgba(0, 0, 0, 0.1)"
            w={"250px"}
            flexDir="column"
            minH="100vh"
            // background="#d8eced"
            // justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Jajang Jaenudin</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
                
            </Flex>
            <Divider display={navSize == "small" ? "none" : "flex"} />
            <Flex
                p="0%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
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
                <NavItem navSize={navSize} icon={FiHome} title="Prediksi" description="This is the description for the dashboard." to="/" active={activeMenu == "prediction" ? true : false}/>
                <NavItem navSize={navSize} icon={BiWater} title="Pos Duga Air" to="/water-level" active={activeMenu == "waterLevel" ? true : false} onClick={() => {setActiveNav("water-level")}}/>
                {
                    activeMenu == "waterLevel" && posData? posData.filter((item) => item.tipe == "DugaAir").map((item, index) => {
                        return <Flex mt={"0px"} onClick={() => {setActiveSubMenu(item.nama)}} padding={"10px 25%"} background={activeSubMenu == item.nama? "#e0ecef" : "default"} w={"100%"} borderRadius={"0px"}>
                            <Text fontSize={"14px"}>{item.nama}</Text>
                        </Flex>
                    }) : null
                }
                <NavItem navSize={navSize} icon={BsCloudRainHeavy} title="Pos Curah Hujan" to="rainfall" active={activeMenu == "rainfall" ? true : false} onClick={() => {setActiveNav("rainfall")}}/>
            </Flex>

            
        </Flex>
    )
}