import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import InterestsIcon from '@mui/icons-material/Interests';

function Profile() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        paddingLeft: theme.spacing(2),
        textAlign: 'left',
        color: "black",
    }));

    const ProfileImage = styled('img')({
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        '@media (max-width: 600px)': {
            width: '100px',
            height: '100px',
        },
    });

    return <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
            <Box sx={{ bgcolor: 'background.paper', height: '100vh' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={3}>
                            <ProfileImage src="https://img.freepik.com/fotos-gratis/mulher-despreocupada-positiva-com-cabelo-encaracolado-vestido-com-capuz-sorri-alegremente-faz-gesto-de-paz-tira-selfie-em-local-urbano-estando-de-bom-humor-apos-treinamento-esportivo-pessoas-emocoes-e-estilo-de-vida-esportivo_273609-59906.jpg" 
                                alt="Icon"
                            />
                        </Grid>
                        <Grid xs={9}>
                            <Item className="desc">
                                <Typography variant="h4">
                                    <span className="sub ajust_fonts">Camille</span> 
                                    <span className='ajust_fonts'> Kein</span>
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    <p className='ajust_fonts_desc'>
                                        É necessário sempre acreditar que tudo é possível, sempre buscar pensamentos positivos apesar das horas turbulentas. Você atrai o que você pensa. É necessário sempre acreditar que tudo é possível.
                                    </p>
                                </Typography>
                                <Typography variant="subtitle2">
                                    <span className='ajust_fonts_inco'><PinDropIcon className='desc_icon' sx={{ fontSize: "large", mr: 1 }}/> São Paulo</span>
                                </Typography>
                                <Typography variant="subtitle2">
                                    <InterestsIcon className='desc_icon' sx={{ fontSize: "large", mr: 1 }} /> Viagens, Tecnologia
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </React.Fragment>
}

export default Profile;
