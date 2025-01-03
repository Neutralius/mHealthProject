// Quelle: https://mui.com/x/react-data-grid/?srsltid=AfmBOoqrBpkS-_3wKL2Q5RClhBp1SlJEieQXhAyFwYapeQBuaC8BHvDe

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import generateMockData from "../../../data/generateMockData.js";

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'Name',
        headerName: 'Name',
        width: 300,
        sortable: true
    },
    {
        field: 'Patienten',
        headerName: 'wartende Patienten',
        width: 90,
    },
    {
        field: 'Wartezeit',
        headerName: 'aktuelle Wartezeit',
        width: 110,
        sortable: true
    },
];

export default function DataGridDemo() {
    const rows = generateMockData();

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
