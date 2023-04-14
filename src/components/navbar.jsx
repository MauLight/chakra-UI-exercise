import { Box, Flex, HStack, Heading, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";


const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/MauLight",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/mauluz",
    },
    {
        icon: faMedium,
        url: "https://wakeupmau.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];


export default function Navbar() {

    const noUnder = {
        ':hover': {
            color: "tomato",
            textDecoration: "none"
        }
    }

    return (
        <>
            <Flex as="nav" p="10px">
                {socials && socials.map((elem, index) => {
                    return (
                        <Link fontSize={{ base: "3px", md: "8px", lg: "16px" }} key={elem.url} mx={3} href={elem.url}><FontAwesomeIcon icon={elem.icon} size="2x" className='nav-icon' /></Link>
                    )
                })}
                <Spacer />
                <Heading as="h1" className='nav-title' fontSize={{ base: "8px", md: "15px", lg: "32px" }} >SCREENWRITERS' QUEST</Heading>
                <Spacer />
                <HStack spacing={8} mr={3} ml={20} alignItems="center">
                    <Link sx={noUnder} className='nav-item' fontSize={{ base: "3px", md: "8px", lg: "16px" }} href='/'>Contact me</Link>
                    <Link sx={noUnder} className='nav-item' fontSize={{ base: "3px", md: "8px", lg: "16px" }} href='/' >Projects</Link>
                </HStack>
            </Flex>
            <Flex justifyContent="center" wrap="wrap">
                <Box w="150px" h="50px" bg="red.800"></Box>
                <Box w="150px" h="50px" bg="red.700"></Box>
                <Box w="150px" h="50px" bg="red.600"></Box>
                <Box w="150px" h="50px" bg="red.500"></Box>
                <Box w="150px" h="50px" bg="red.400"></Box>
                <Box w="150px" h="50px" bg="red.300"></Box>
                <Box w="150px" h="50px" bg="red.200"></Box>
                <Box w="150px" h="50px" bg="red.100"></Box>
            </Flex>
        </>

    )
}
