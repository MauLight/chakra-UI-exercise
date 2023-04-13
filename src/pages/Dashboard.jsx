import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

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
    </Container>
  )
}
