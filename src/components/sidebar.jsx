import { AtSignIcon, CalendarIcon, EditIcon, UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Button, List, ListIcon, ListItem, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    const toast = useToast();

    const handleClick = () => {
        toast({
            title: "Logged out",
            description: "You've succesfully logged out of the system.",
            duration: 5000,
            isClosable: true,
            status: "success",
            variant: 'left-accent',
            position: 'bottom-left',
            icon: <UnlockIcon />
        });
    }

    const btnStyle = {
        p: "30px",
        bg: "tomato",
        color: "white",
        mt: "20px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
        ':hover': {
            bg: "gray.100",
            color: "tomato"
        },
        ':active': {
            bg: "tomato",
            color: "white",
        }
    }

    return (
        <List color="white" fontSize="1.2em" spacing={4}>
            <ListItem my={7} justifyContent="center" display="flex">
                <Avatar src="/img/A.jpeg" size="2xl">
                    <AvatarBadge width={2} height={2} p={4} bg="red.500" border="1px solid white">
                        <Text fontSize="xs" color="white">9</Text>
                    </AvatarBadge>
                </Avatar>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem justifyContent="center" display="flex">
                <NavLink to="/create">
                    <ListIcon as={EditIcon} />
                    Create
                </NavLink>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <NavLink to="/profile">
                    <ListIcon as={AtSignIcon} />
                    Profile
                </NavLink>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Button sx={btnStyle} onClick={handleClick} >Log Out</Button>
            </ListItem>
        </List>
    )
}
