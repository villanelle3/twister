import React from 'react';
import { Box, Button, Typography } from "@mui/material"
import MyDatePickerField from "./forms/MyDatePickerField"
import MyTextField from "./forms/MyTextField"
import MySelectField from "./forms/MySelectField"
import MyMultLineField from "./forms/MyMultLineField"
import { useForm } from 'react-hook-form';
import AxiosInstance from "./Axios"
import DayJs from "dayjs"
import { useNavigate } from 'react-router-dom';
import './styles.scss'; 

function Create() {
    const navigate = useNavigate()
    const defaultValues = {
        name:"",
        comments: "",
        status: "",
    }
    const {handleSubmit, reset, setValue, control} = useForm({defaultValues:defaultValues})
    const submission = (data) => 
    {
        const StartDate = DayJs(data.start_date["d"]).format("YYYY-MM-DD")
        const EndDate = DayJs(data.end_date["d"]).format("YYYY-MM-DD")
        AxiosInstance.post(
            `project/`,{
                name: data.name,
                status: data.status,
                comments: data.comments,
                start_data: StartDate,
                end_data: EndDate,
            }
        )
        .then((res) => {
            navigate(`/`)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submission)}>
                <Box className="BoxCreate">
                    <Typography className="BoxCreate_Typography">
                        Create Records
                    </Typography>
                </Box>

                <Box className="BoxCreate_bottom">
                    <Box className="BoxCreate_bottom_intern">
                        <MyTextField
                            label="Name" 
                            placeholder="Provide a project name" 
                            name="name" 
                            control={control}
                            width={"30%"}
                        />
                        <MyDatePickerField
                            label="Start date" 
                            name="start_date" 
                            control={control}
                            width={"30%"}
                        />
                        <MyDatePickerField
                            label="End date" 
                            name="end_date" 
                            control={control}
                            width={"30%"}
                        />
                    </Box>
                    <Box className="BoxCreate_bottom_intern">
                        <MyMultLineField
                            label="Comments" 
                            placeholder="Provide project comments" 
                            name="comments" 
                            control={control}
                            width={"30%"}
                        />
                        <MySelectField
                            label="Status" 
                            name="status" 
                            control={control}
                            width={"30%"}
                        />
                        <Box className="BoxCreate_button_box">
                            <Button variant='contained' type='submit' className="BoxCreate_button_box_button">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Create;

