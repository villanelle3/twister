import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Perfil() {
    // Componente para exibir uma grade na página
    const GridComponent = () => {
        return (
            <Container>
                <Row>
                    <Col sm className="text-info">
                        Posts
                    </Col>
                    <Col sm>
                        Following
                    </Col>
                    <Col sm>
                        Followers
                    </Col>
                </Row>
            </Container>
        );
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
                            <ProfileImage src="https://img.freepik.com/fotos-gratis/mulher-despreocupada-positiva-com-cabelo-encaracolado-vestido-com-capuz-sorri-alegremente-faz-gesto-de-paz-tira-selfie-em-local-urbano-estando-de-bom-humor-apos-treinamento-esportivo-pessoas-emocoes-e-estilo-de-vida-esportivo_273609-59906.jpg" 
                                alt="Icon"
                            />
                        </Col>
                        <Col sm={12} md={8}>
                            <Card.Body>
                                <Title variant="h4">
                                    <span className="sub">Camille</span>
                                    <span> Kein</span>
                                </Title>
                                <CardText>
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
                            <Card.Text className="text-center">
                                Botão 
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
