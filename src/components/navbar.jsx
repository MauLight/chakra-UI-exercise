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
    return (
        <>
            <Flex as="nav" p="10px">
                {socials && socials.map((elem, index) => {
                    return (
                        <Link key={elem.url} mx={3} href={elem.url}><FontAwesomeIcon icon={elem.icon} size="2x" /></Link>
                    )
                })}
                <Spacer />
                <Heading as="h1" className='nav-title'>SCREENWRITERS' QUEST</Heading>
                <Spacer />
                <HStack spacing={8} mr={3} ml={20} alignItems="center">
                    <Link href='/'>Contact me</Link>
                    <Link href='/' >Projects</Link>
                </HStack>
            </Flex>
            <Flex bg="gray.300" justifyContent="center" wrap="wrap">
                <Box w="150px" h="50px" bg="red.800">A</Box>
                <Box w="150px" h="50px" bg="red.700">B</Box>
                <Box w="150px" h="50px" bg="red.600">C</Box>
                <Box w="150px" h="50px" bg="red.500">D</Box>
                <Box w="150px" h="50px" bg="red.400">E</Box>
                <Box w="150px" h="50px" bg="red.300">F</Box>
                <Box w="150px" h="50px" bg="red.200">G</Box>
                <Box w="150px" h="50px" bg="red.100">H</Box>
                <Box w="150px" h="50px" bg="red.50" flexGrow="1">I</Box>
            </Flex>
        </>

    )
}
