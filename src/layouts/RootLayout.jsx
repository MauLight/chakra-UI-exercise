import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import { Grid } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid>
    <Navbar />
      <Outlet />
    </Grid>
  )
}
