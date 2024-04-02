import React, {useState } from 'react';
import { Box, useTheme, Typography, TextareaAutosize } from "@mui/material"
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
import { Link } from 'react-router-dom';

function Tweet(props) {
    const { id, autor, data, texto, likes, replies, foto, user_id } = props;

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
    

    return (
        <div>

            {/* ------------------------------------------------ BLOCO D0 TWEEET------------------------------------------------ */}
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={maxWidth}>
                    <Box className="custom-box">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <img src={foto}  
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
                                    primary={<Link className='links' to={`/profile/${user_id}`}>{autor}</Link>} 
                                    secondary={
                                        <Typography variant="body2" color="text.secondary">
                                            <span>{data}</span>
                                            <span style={{ marginLeft: '0.5rem' }}>|</span>
                                            <span style={{ marginLeft: '0.5rem' }}>{likes} likes</span>
                                            <span style={{ marginLeft: '0.5rem' }}>|</span>
                                            <span style={{ marginLeft: '0.5rem' }}>{replies} Replies</span>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                        <Box className="tweet" sx={{bgcolor: 'background.paper' }}>
                            <Typography variant="body1" align="left" className="tweet_text">
                                {texto}
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
        
        </div>
    );
}

export default Tweet;
