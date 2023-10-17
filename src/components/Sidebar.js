import Link from 'next/link'

import styles from '@/styles/Navbar.module.css'

import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'

import { 
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading } from '@chakra-ui/react'

import { useState } from 'react'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="0"
            h="100vh"
            boxShadow="5px 5px 12px 0 rgba(0, 0, 0, 0.1)"
            w={navSize == "small" ? "75px" : "250px"}
            flexDir="column"
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
                p="5%"
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
                <NavItem navSize={navSize} icon={FiHome} title="Prediksi" description="This is the description for the dashboard." to="/"/>
                <NavItem navSize={navSize} icon={FiCalendar} title="Pos Duga Air" to="/water-level" active={true}/>
                <NavItem navSize={navSize} icon={FiUser} title="Pos Curah Hujan" to="rainfall" />
                {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" /> */}
                {/* <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
            </Flex>

            
        </Flex>
    )
}