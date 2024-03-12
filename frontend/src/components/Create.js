import React, {useEffect, useState} from 'react';
import { Box, Button, Typography } from "@mui/material"
import MyDatePickerField from "./forms/MyDatePickerField"
import MyTextField from "./forms/MyTextField"
import MySelectField from "./forms/MySelectField"
import MyMultLineField from "./forms/MyMultLineField"
import { useForm } from 'react-hook-form';
import AxiosInstance from "./Axios"
import DayJs from "dayjs"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './styles.scss'; 

function Create() {
    const [projectmaneger, setProjectmaneger] = useState([]);
    const hardcoded_options = [
        {id:"", name:"None"},
        {id:"Open", name:"Open"},
        {id:"In progress", name:"In progress"},
        {id:"Completed", name:"Completed"}
    ]
    const GetData = () => {
        AxiosInstance.get('projectmaneger/').then((res) => {
            setProjectmaneger(res.data);
        });
    };
    useEffect(() => {
        GetData();
    }, []);

    const navigate = useNavigate();
    const defaultValues = {
        name: "",
        comments: "",
        status: "",
        start_date: null,
        end_date: null
    };

    const schema = yup.object({
        name: yup.string().required("Name is required"),
        projectmaneger: yup.string().required("It is required"),
        status: yup.string().required("Status is required!"),
        comments: yup.string(),
        start_date: yup.date().required("Start date is required!"),
        end_date: yup.date().required("End date is required!")
            .min(yup.ref("start_date"), "End date cannot be before start date!")
    });

    const { handleSubmit, control } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const submission = (data) => {
        AxiosInstance.post(
            `project/`, {
            name: data.name,
            projectmaneger: data.projectmaneger,
            status: data.status,
            comments: data.comments,
            start_data: DayJs(data.start_date).format("YYYY-MM-DD"),
            end_data: DayJs(data.end_date).format("YYYY-MM-DD"),
        })
            .then((res) => {
                navigate(`/`);
            });
    };

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
                            options={hardcoded_options}
                        />
                            <MySelectField
                                label="Project Maneger"
                                name="projectmaneger"
                                control={control}
                                width={"30%"}
                                options={projectmaneger}
                            />
                    </Box>
                    <Box className="BoxCreate_button_box">
                        <Button variant='contained' type='submit' className="BoxCreate_button_box_button">
                            Submit
                        </Button>
                    </Box>
                </Box> 
            </form>
        </div>
    );
}

export default Create;
