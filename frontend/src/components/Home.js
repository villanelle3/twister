import React, { useEffect, useMemo, useState } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton } from "@mui/material"
import { Edit as EditIcon, Delete as DeleteIcon, } from '@mui/icons-material';
import Dayjs from "dayjs"
import { Link } from "react-router-dom"
import Tweet from './Tweet';

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
                Cell: ({row}) => (
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                        <IconButton color="secondary" LinkComponent={Link} to={`edit/${row.original.id}`}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" LinkComponent={Link} to={`delete/${row.original.id}`}>
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
            {/* <h1 className="titles">Home</h1> */}
            <ul>
                {mydata.slice().reverse().map(item => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            
            <Tweet autor="Maria Silva" data="Jan 9, 2014" texto="testando" likes="185" replies="3" foto="https://www.dicasdemulher.com.br/wp-content/uploads/2020/06/capa-e-girl.png" />
            <Tweet autor="João Pereira" data="Jan 8, 2014" texto="mais um teste" likes="15" replies="1" foto="https://img.freepik.com/fotos-gratis/foto-de-cintura-para-cima-de-um-jovem-europeu-feliz-satisfeito-em-uma-camiseta-vermelha-da-moda_176420-24330.jpg" />
            <Tweet autor="Camila Santos" data="Jan 10, 2014" texto="testando de novo..." likes="82" replies="0" foto="https://img.freepik.com/fotos-gratis/posando-para-tirar-uma-selfie-retrato-de-uma-menina-adolescente-caucasiana-sobre-fundo-azul-bela-modelo-em-moda-casual-conceito-de-emocoes-humanas-expressao-facial-vendas-anuncio-copyspace-parece-feliz_155003-34366.jpg" />

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
