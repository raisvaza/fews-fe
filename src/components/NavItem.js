import { Flex, Menu, MenuButton, Icon, Link, Text } from "@chakra-ui/react"


export default function NavItem({navSize, title, icon, active, to}) {

    return (
        <Flex
            mt={0}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        > 
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={0}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize == "large" && "100%"}
                    href={to}
                >
                    <MenuButton
                        w="100%"
                    >
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active? "#82AAAD" : "gray.500"}/>
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>

        </Flex>
    )
}