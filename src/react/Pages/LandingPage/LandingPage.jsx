import React from 'react'
import { Container } from '@mui/material'
import DataGridDemo from "../../Components/DataGrid/DataGrid.jsx";

const LandingPage = () => (
  <Container
    maxWidth={false}
    disableGutters
  >
    Hello World!
    Landing
    <DataGridDemo />
  </Container>
)

export default LandingPage
