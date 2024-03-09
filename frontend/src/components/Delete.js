import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material"
import AxiosInstance from "./Axios"
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss'; 

function Delete() {
    const { id } = useParams(); // Obter o id dos parâmetros de rota
    const [mydata, setMydata] = useState({});

    useEffect(() => {
        const GetData = async () => {
            try {
                const res = await AxiosInstance.get(`project/${id}`);
                setMydata(res.data);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };
        GetData();
    }, [id]); // Adicionar id como dependência para re-chamar GetData quando id mudar

    const navigate = useNavigate();

    const submission = () => {
        AxiosInstance.delete(`project/${id}`)
        .then((res) => {
            navigate(`/`);
        })
        .catch((error) => {
            console.error('Erro ao excluir registro:', error);
        });
    };

    return (
        <div>
            <Box className="BoxCreate">
                <Typography className="BoxCreate_Typography">
                    Delete Records
                </Typography>
            </Box>
            <Box className="BoxCreate_bottom">
                Delete {mydata.name}?
                <Box className="BoxCreate_bottom_intern">
                    <Button variant='contained' onClick={submission} className="BoxCreate_button_box_button">
                        Delete {/* Corrigir a ortografia de "Delete" */}
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Delete;
