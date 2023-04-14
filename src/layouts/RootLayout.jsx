import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan={{ base: 6, lg: 1, xl: 1 }} bg="tomato" minHeight={{ lg: "100vh" }} p={{ base: "20px", lg: "30px" }}>
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 5, xl: 5 }} >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
