import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from "@mui/material/FormHelperText";
import { Controller } from "react-hook-form";
import { useTheme } from '@mui/material/styles';

export default function MySelectField(props) {
    const { label, name, control, width, options } = props;
    const theme = useTheme();

    return (
        <FormControl variant="standard" sx={{ width: { width } }}>
            <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                    <>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={value}
                            onChange={onChange}
                        >
                            {
                                options.map((option) => (
                                    <MenuItem value={option.id}>
                                        <em>{option.name}</em>
                                    </MenuItem>
                                ))
                            }
                            {/* <MenuItem value={"Open"}>Open</MenuItem>
                            <MenuItem value={"In progress"}>In progress</MenuItem>
                            <MenuItem value={"Completed"}>Completed</MenuItem> */}
                        </Select>
                        {error && <FormHelperText sx={{ color: theme.palette.error.main }}>{error.message}</FormHelperText>}
                    </>
                )}
            />
        </FormControl>
    );
}
