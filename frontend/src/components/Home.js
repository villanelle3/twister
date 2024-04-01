import React, { useEffect, useMemo, useState } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton, useTheme, Typography, TextareaAutosize } from "@mui/material"
import { Edit as EditIcon, Delete as DeleteIcon, } from '@mui/icons-material';
import Dayjs from "dayjs"
import { Link } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SendIcon from '@mui/icons-material/Send';
import { FormControl } from '@mui/base/FormControl';
import Grid from '@mui/material/Unstable_Grid2';
import CheckIcon from '@mui/icons-material/Check';


// import CheckIcon from '@mui/icons-material/Check';

// import Grid from '@mui/material/Unstable_Grid2';


function Home() {
    const [liked, setLiked] = useState(false);
    const [retweeted, setRetweet] = useState(false);
    const [replied, setReplied] = useState(false);
    const [reply, setReply] = useState('');
    const [alert, setAlert] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Formulário enviado:', reply);

        setReply('');
        setReplied(!replied);

        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1500); // número de milissegundos
    };

    const handleLikeClick = () => {
        setLiked(!liked);
        if (liked){
            console.log('desligar like para a api')
        }else{
            console.log('enviar like para a api')
        }
        
    };

    const handleRtwwetClick = () => {
        setRetweet(!retweeted);
        if (retweeted){
            console.log('desligar o retweet para a api')
        }else{
            console.log('enviar retweet para a api')
        }
        
    };

    const handleReplyClick = () => {
        setReplied(!replied);
        if (replied){
            console.log('esconder o form')
        }else{
            console.log('mostar o form')
        }
        
    };

    const theme = useTheme();

    const maxWidth = {
        xs: '100%',                     // Para telas extra pequenas
        sm: theme.breakpoints.values.sm, // Para telas pequenas
        md: theme.breakpoints.values.md, // Para telas médias
        lg: theme.breakpoints.values.lg, // Para telas grandes
    };
    
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

            {/* ------------------------------------------------ BLOCO D0 TWEEET------------------------------------------------ */}
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={maxWidth}>
                    <Box className="custom-box">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <img src="https://www.dicasdemulher.com.br/wp-content/uploads/2020/06/capa-e-girl.png" 
                                    alt="Icon"
                                    className="ProfileIcon"/>
                                </ListItemAvatar>
                                <ListItemText 
                                    className="ProfileName"
                                    primaryTypographyProps={{
                                        fontSize: '1.15rem',
                                        fontWeight: 'bold',
                                        // Reduz o tamanho da fonte para dispositivos móveis
                                        sx: {
                                            '@media (max-width: 600px)': {
                                                fontSize: '1.2rem',
                                            },
                                        },
                                    }}
                                    secondaryTypographyProps={{
                                        fontSize: '1rem', // Tamanho de fonte padrão
                                        // Reduz o tamanho da fonte para dispositivos móveis
                                        '@media (max-width: 600px)': {
                                            fontSize: '0.8rem',
                                        },
                                    }}
                                    primary="Maria Silva" 
                                    secondary={
                                        <Typography variant="body2" color="text.secondary">
                                            <span>Jan 9, 2014</span>
                                            <span style={{ marginLeft: '0.5rem' }}>|</span>
                                            <span style={{ marginLeft: '0.5rem' }}>125 likes</span>
                                            <span style={{ marginLeft: '0.5rem' }}>|</span>
                                            <span style={{ marginLeft: '0.5rem' }}>0 Replies</span>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                        <Box className="tweet" sx={{bgcolor: 'background.paper' }}>
                            <Typography variant="body1" align="left" className="tweet_text">
                                Many desktop page editors page editors page editors now Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.  
                            </Typography>
                            <Typography align="left" className="tweet_like">
                            <ButtonGroup variant="text" aria-label="Basic button group">
                                {/* Botão Like */}
                                <Button
                                    sx={{ color: liked ? '#A20E0E' : '#2B2B2B' }} 
                                    onClick={handleLikeClick}
                                >
                                    {liked ? 'Liked' : 'Like'}<ThumbUpIcon sx={{ fontSize: "medium", ml: 1 }} />
                                </Button>
                                {/* Botão Reply */}
                                <Button
                                    sx={{ color: '#2B2B2B' }} 
                                    onClick={handleReplyClick}
                                >
                                    <ReplyIcon sx={{ fontSize: "large", mr: 1 }} />Reply
                                </Button>
                                {/* Botão Retweet */}
                                <Button
                                    sx={{ color: retweeted ? 'info.main' : '#2B2B2B' }} 
                                    onClick={handleRtwwetClick} // Adicione sua lógica de clique aqui
                                >
                                    {retweeted ? 'Undo Retweet' : 'Retweet'}<SwapCallsIcon sx={{ fontSize: "large", ml: 1 }} />
                                </Button>
                            </ButtonGroup>
                            
                            {alert ?
                            <div style={{ color: "green" }}>
                                Reply sent <CheckIcon style={{ fontSize: "medium", marginRight: "4px" }} />
                            </div>
                            : ""}

                            </Typography>
                            <div className='block-reply'>
                                {replied ? 
                                    <Container maxWidth="md">
                                        <Box sx={{ flexGrow: 1 }}>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={10}>
                                                        <FormControl className="input-container"> {/* Aplicando a classe CSS */}
                                                            <TextareaAutosize
                                                                placeholder="Reply Tweet"
                                                                value={reply}
                                                                onChange={(e) => setReply(e.target.value)}
                                                                className="textarea"
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid xs={2}>
                                                        <Button
                                                            variant="contained"
                                                            endIcon={<SendIcon />}
                                                            color="secondary"
                                                            type='submit'
                                                        >
                                                            Send
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Box>
                                    </Container>
                                : ""}
                            </div>
                        </Box>
                </Container> 
            </React.Fragment>
            {/* ---------------------------------------------------------------------------------------------------------------- */}

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
