import React,  { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material"
import AxiosInstance from "./Axios"
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss'; 

function Delete() {
    const myParam = useParams()
    const myID = myParam.id
    const [mydata, setMydata] = useState([]);


    const GetData = () => {
        AxiosInstance.get(`project/${myID}`).then((res) => {
            setMydata(res.data);
        });
    };

    useEffect(() => {
        console.log(myID)
        GetData();
    });

    const navigate = useNavigate()

    const submission = (data) => 
    {
        AxiosInstance.delete(
            `project/${myID}/`,{

            }
        )
        .then((res) => {
            navigate(`/`)
        })
    }
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
                                Delete
                            </Button>
                    </Box>
                </Box>
        </div>
    )
}

export default Delete;

