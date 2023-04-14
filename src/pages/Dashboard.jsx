import { Box, Container, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

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

  const imgStyle = {
    h: "200px",
    objectFit: "cover",
    transition: "all 0.3s ease",
    ':hover': {
      filter: "grayscale(100%)"
    }
  }

  const images = [
    "https://images.unsplash.com/photo-1680479611085-2a075987da25",
    "https://images.unsplash.com/photo-1680178441861-c9539e92434f",
    "https://images.unsplash.com/photo-1677834097867-2558c44fdd11",
    "https://images.unsplash.com/photo-1673832870868-929b5df3e993",
    "https://images.unsplash.com/photo-1673506073231-3d4896dd45c2",
    "https://images.unsplash.com/photo-1673337188151-d8f8dff438fe",
    "https://images.unsplash.com/photo-1675384608610-5e2c9d2b647c",
    "https://images.unsplash.com/photo-1672667680124-6b9294abf071",
    "https://images.unsplash.com/photo-1655717727967-b140fbbfbc05",
    "https://images.unsplash.com/photo-1603118258549-5be87cb17a81",
    "https://images.unsplash.com/photo-1567972308721-4f22e8465feb",
    "https://images.unsplash.com/photo-1597390520065-5f361b7f132a"
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
    </Container>
  )
}
