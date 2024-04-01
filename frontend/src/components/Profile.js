import React, {useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tweet from './Tweet';
import Lista from './Lista';

function Perfil() {
    const name = "Camille"
    const lastname = "Kein";
    const foto = "https://img.freepik.com/fotos-gratis/mulher-despreocupada-positiva-com-cabelo-encaracolado-vestido-com-capuz-sorri-alegremente-faz-gesto-de-paz-tira-selfie-em-local-urbano-estando-de-bom-humor-apos-treinamento-esportivo-pessoas-emocoes-e-estilo-de-vida-esportivo_273609-59906.jpg";

    const [clickPosts, setClickPosts] = useState(true);
    const [clickSeguidores, setClickSeguidores] = useState(false);
    const [clickSeguindo, setClickSeguindo] = useState(false);

    const GridComponent = () => {
        const handlePostsClick = () => {
            setClickSeguidores(false);
            setClickSeguindo(false);
            setClickPosts(true);
            if (clickPosts){
                console.log('Mostar posts')
            }else{
                console.log('Esconder posts')
            }
            
        };

        const handleSeguindoClick = () => {
            setClickSeguidores(false);
            setClickSeguindo(true);
            setClickPosts(false);
            if (clickSeguindo){
                console.log('Mostar seguindo')
            }else{
                console.log('Esconder seguindo')
            }
            
        };

        const handlesetClickSeguidores = () => {
            setClickSeguidores(true);
            setClickSeguindo(false);
            setClickPosts(false);
            if (clickSeguidores){
                console.log('Mostar seguidores')
            }else{
                console.log('Esconder seguidores')
            }
            
        };

        return (
            <Container>
                <Row>
                    <Col sm className="text-info">
                        <ButtonGroup variant="text" aria-label="Basic button group">
                            <Button onClick={handlePostsClick} style={{ color: clickPosts ? 'black' : '' }}>Posts</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm>
                        <ButtonGroup variant="text" aria-label="Basic button group">
                            <Button onClick={handleSeguindoClick} style={{ color: clickSeguindo ? 'black' : '' }}>Following</Button>
                        </ButtonGroup> 
                    </Col>
                    <Col sm>
                        <ButtonGroup variant="text" aria-label="Basic button group">
                            <Button onClick={handlesetClickSeguidores} style={{ color: clickSeguidores ? 'black' : '' }}>Followers</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                {clickPosts ? <Posts/> : ""}
                {clickSeguindo ? <Seguindo/> : ""}
                {clickSeguidores ? <Seguidores/> : ""}
            </Container>
        );
    };

    const Posts = () => {
        return (
        <>
            <div className='mt-4'></div>
            <Tweet autor={name + ' ' + lastname} data="Jan 9, 2014" texto="testando" likes="185" replies="3" foto={foto} />
            <Tweet autor={name + ' ' + lastname} data="Jan 9, 2014" texto="testando 2" likes="185" replies="3" foto={foto} />
            <Tweet autor={name + ' ' + lastname} data="Jan 9, 2014" texto="testando 3" likes="185" replies="3" foto={foto} />
            <Tweet autor={name + ' ' + lastname} data="Jan 9, 2014" texto="testando 4" likes="185" replies="3" foto={foto} />
        </>);
    };

    const Seguindo = () => {
        return (
        <>
            <div className='mt-4'></div>
            <Lista seguidores={false}/>
        </>);
    };

    const Seguidores = () => {
        return (
        <>
            <div className='mt-4'></div>
            <Lista seguidores={true}/>
        </>);
    };

    const PageOverview = () => {
        const ProfileImage = styled('img')({
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            paddingTop: '15px',
            paddingBottom: '15px',
            '@media (max-width: 600px)': {
                width: '100px',
                height: '100px',
            },
        });

        const Title = styled(Typography)({
            '@media (max-width: 600px)': {
                fontSize: '24px',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '28px',
            },
        });

        const CardText = styled(Card.Text)({
            '@media (max-width: 600px)': {
                fontSize: '12px',
                marginTop: '10px', // Adiciona margem superior em dispositivos móveis
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '14px',
            },
        });

        const Subtitle = styled(Card.Subtitle)({
            '@media (max-width: 600px)': {
                fontSize: '10px',
            },
            '@media (min-width: 601px) and (max-width: 960px)': {
                fontSize: '12px',
            },
        });

        return (
            <Alert variant="secondary" className="text-center">
                <Card className="text-center" style={{ minHeight: '220px' }}>
                    <Row>
                        <Col sm={12} md={4}>
                            <ProfileImage src={foto} 
                                alt="Icon"
                            />
                        </Col>
                        <Col sm={12} md={8}>
                            <Card.Body>
                                <Title variant="h4">
                                    <span className="sub">{name}</span>
                                    <span> {lastname}</span>
                                </Title>
                                <CardText className='pt-3'>
                                    É necessário sempre acreditar que tudo é possível, sempre buscar pensamentos positivos apesar das horas turbulentas.
                                </CardText>
                                <Subtitle className="mb-2 text-muted">
                                    <span><i className="bi bi-geo-fill"></i> São Paulo</span>
                                </Subtitle>
                                <Subtitle className="mb-2 text-muted">
                                    <span><i class="bi bi-bookmark-heart-fill"></i> Viagens, Tecnologia, Natureza</span>
                                </Subtitle>
                            </Card.Body>
                        </Col>
                        <Col sm={12} className="d-flex align-items-center justify-content-center">
                            <Card.Text className="pb-2 text-center">
                                <Button variant="contained">Seguir</Button>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card>
            </Alert>
        );
    };

    return (
        <div>
            <PageOverview />
            <GridComponent />
        </div>
    );
}

export default Perfil;
