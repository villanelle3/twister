import React, { useEffect, useMemo, useState } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton } from "@mui/material"
import { Edit as EditIcon, Delete as DeleteIcon, } from '@mui/icons-material';
import Dayjs from "dayjs"

function Home() {
    const [mydata, setMydata] = useState([]);

    const GetData = () => {
        AxiosInstance.get('project/').then((res) => {
            setMydata(res.data);
        });
    };

    useEffect(() => {
        GetData();
    }, []);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
            },
            {
                accessorKey: 'comments', //normal accessorKey
                header: 'Comments',
                size: 200,
            },
            {
                accessorFn: (row) => Dayjs(row.start_data).format("DD-MM-YYYY"),   
                header: 'Start date',
                size: 150,
            },
            {
                accessorFn: (row) => Dayjs(row.END_data).format("DD-MM-YYYY"),   
                header: 'End date',
                size: 150,
            },
            {
                header: 'Actions',
                size: 180,
                accessorFn: () => null, // No need for an accessor function here
                Cell: () => (
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                        <IconButton color="secondary">
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ),
            },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data: mydata,
    });

    return (
        <div>
            <h1>Home</h1>
            <MaterialReactTable 
                table={table}
                layoutMode="grid"
                displayColumnDefOptions={{
                    'mrt-row-actions': {
                        size: 180,
                        grow: false,
                    },
                }}
                enableRowActions
            />
        </div>
    );
}

export default Home;
