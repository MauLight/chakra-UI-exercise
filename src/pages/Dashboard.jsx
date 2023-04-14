import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData();

  const boxStyle = {
    p: "50px",
    bg: "tomato",
    color: "white",
    mt: "50px",
    textAlign: "center",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    ':hover': {
      bg: "gray.100",
      color: "tomato"
    }
  }

  const boxStyle2 = {
    p: "10px",
    bg: "purple.500",
    color: "purple.50",
    m: "10px",
    textAlign: "center",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    ':hover': {
      bg: "purple.100",
      color: "purple.600"
    }
  }

  const imgStyle = {
    h: "200px",
    objectFit: "cover",
    transition: "all 0.3s ease",
    ':hover': {
      filter: "grayscale(100%)"
    }
  }

  const images = [
    "https://i.postimg.cc/bN9SVGWK/1.jpg",
    "https://i.postimg.cc/6qNTYw0W/10.jpg",
    "https://i.postimg.cc/SQ7KkBd9/11.jpg",
    "https://i.postimg.cc/qqXqFYb8/12.jpg",
    "https://i.postimg.cc/L6pZVkCt/2.jpg",
    "https://i.postimg.cc/K89kF6Zf/3.jpg",
    "https://i.postimg.cc/9FLFqyvF/4.jpg",
    "https://i.postimg.cc/gcRZRtDc/5.jpg",
    "https://i.postimg.cc/28kS609K/6.jpg",
    "https://i.postimg.cc/wB7tBwMp/7.jpg",
    "https://i.postimg.cc/nc2MYyQx/8.jpg",
    "https://i.postimg.cc/BnZLrSGt/9.jpg"
  ]


  return (
    <Container as="section" maxW="2xl">
      <Heading my="40px" p="10px" >DASHBOARD</Heading>
      <Text marginLeft="30px">Irure sint id eu occaecat nostrud nostrud consequat aliqua veniam amet exercitation. Esse eu fugiat enim laborum quis incididunt proident incididunt eu proident. Adipisicing ad incididunt laboris do ullamco enim.</Text>
      <Text ml="30px" color="gray.400" fontWeight="thin">Irure sint id eu occaecat nostrud nostrud consequat aliqua veniam amet exercitation. Esse eu fugiat enim laborum quis incididunt proident incididunt eu proident. Adipisicing ad incididunt laboris do ullamco enim.</Text>
      <Box sx={boxStyle}>
        <Text>This is a box!</Text>
      </Box>
      <Box sx={boxStyle2}>
        Hey there Heroes!
      </Box>
      <SimpleGrid my={20} spacing={1} minChildWidth="150px">
        {
          images && images.map((elem, index) => {
            return (
              <Box h="200px" key={index}>
                <Image src={elem} sx={imgStyle} ></Image>
              </Box>
            )
          })
        }
      </SimpleGrid>
      <SimpleGrid spacing={10} minChildWidth="200px" mb={20}>
        {
          tasks && tasks.map(task => (
            <Card key={task.id} borderTop="8px" borderTopColor="tomato" bg="white">
              <CardHeader>
                <Flex gap={5}>
                  <Box w="50px" h="50px" >
                    <Text>AV</Text>
                  </Box>
                  <Box>
                    <Heading as="h2" size="sm">{task.title}</Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color="gray.400">
                <Text>{task.description}</Text>
              </CardBody>
              <Divider color="gray.200" w={200} mx="auto"></Divider>
              <CardFooter>
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />} >Details</Button>
                  <Button variant="ghost" leftIcon={<EditIcon />} >Comment</Button>
                </HStack>
              </CardFooter>
            </Card>
          ))
        }
      </SimpleGrid>
    </Container>
  )
}

export const tasksLoader = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  return response.json()
};