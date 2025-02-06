// Quelle: https://mui.com/x/react-data-grid/?srsltid=AfmBOoqrBpkS-_3wKL2Q5RClhBp1SlJEieQXhAyFwYapeQBuaC8BHvDe

import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { useState, useMemo } from 'react'
import generateMockData from '../../../data/generateMockData'
import { useLocation } from '../../Contexts/LocationContext'
import HospitalModal from '../../Pages/Layout/HospitalModalLayout'

const columns = [
  /* {
    field: 'id',
    headerName: 'ID',
    width: 90
  }, */
  {
    field: 'Name',
    headerName: 'Name',
    width: 300,
    sortable: true
  },
  {
    field: 'Patienten',
    headerName: 'wartende Patienten',
    width: 90
  },
  {
    field: 'Wartezeit',
    headerName: 'aktuelle Wartezeit',
    width: 110,
    sortable: true
  }
]

const KrankenhausListe = () => {
  const { filteredLocations } = useLocation()
  const rows = useMemo(
    () => generateMockData(filteredLocations),
    [filteredLocations]
  )

  const [selectedHospital, setSelectedHospital] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRowClick = (params) => {
    setSelectedHospital(params.row) // Speichere die angeklickte Zeile
    setIsModalOpen(true) // Öffne das Modal
  }

  const handleClose = () => {
    setIsModalOpen(false) // Schließe das Modal
    setSelectedHospital(null) // Zurücksetzen
  }

  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
          initialState={{
            sorting: {
              sortModel: [{
                field: 'Wartezeit',
                sort: 'asc'
              }]
            },
            pagination: {
              paginationModel: {
                pageSize: 18
              }
            }
          }}
          pageSizeOptions={[18]}
              // checkboxSelection
          disableRowSelectionOnClick
          getRowId={(row) => row.Name}
        />
      </Box>
      <HospitalModal
        open={isModalOpen}
        onClose={handleClose}
        hospital={selectedHospital}
      />
    </>
  )
}

export default KrankenhausListe
