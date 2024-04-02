import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tweet from './Tweet';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import AxiosInstance from './Axios';

function Perfil() {
    const { id } = useParams();
    const myID = parseInt(id);

    const [postsData, setPostsData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        GetPostAndUserData();
    }, [myID]);

    const GetPostAndUserData = async () => {
        try {
            const [postsRes, usersRes] = await Promise.all([
                AxiosInstance.get('posts/'),
                AxiosInstance.get('user/')
            ]);
            setPostsData(postsRes.data);
            setUsersData(usersRes.data);
            const user = usersRes.data.find(user => user.id === myID);
            setUserData(user);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const [clickPosts, setClickPosts] = useState(true);
    const [clickSeguidores, setClickSeguidores] = useState(false);
    const [clickSeguindo, setClickSeguindo] = useState(false);

    const GridComponent = () => {
        const handlePostsClick = () => {
            setClickSeguidores(false);
            setClickSeguindo(false);
            setClickPosts(true);
        };

        const handleSeguindoClick = () => {
            setClickSeguidores(false);
            setClickSeguindo(true);
            setClickPosts(false);
        };

        const handlesetClickSeguidores = () => {
            setClickSeguidores(true);
            setClickSeguindo(false);
            setClickPosts(false);
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
                {clickPosts && <Posts userData={userData} postsData={postsData} />}
                {clickSeguindo && <Seguindo />}
                {clickSeguidores && <Seguidores />}
            </Container>
        );
    };

    const Posts = ({ userData, postsData }) => {
        return (
            <>
                <div className='mt-4'></div>
                {postsData.slice().reverse().map((item) => {
                    const userIndex = usersData.findIndex(user => user.id === item.dono);
                    if (userIndex === -1 || userData === null || userData.id !== item.dono) return null;
                    return (
                        <Tweet
                            key={item.id}
                            autor={`${userData.first_name} ${userData.last_name}`}
                            data={formatDate(item.data)}
                            texto={item.texto}
                            likes={item.like_count}
                            replies={8}
                            foto="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png"
                            user_id={userIndex}
                        />
                    );
                })}
            </>
        );
    };

    const Seguindo = () => {
        return (
            <>
                <div className='mt-4'></div>
                <Lista seguidores={false}/>
            </>
        );
    };

    const Seguidores = () => {
        return (
            <>
                <div className='mt-4'></div>
                <Lista seguidores={true}/>
            </>
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
                marginTop: '10px', 
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
                            <ProfileImage src={userData ? userData.foto : ''} 
                                alt="Icon"
                            />
                        </Col>
                        <Col sm={12} md={8}>
                            <Card.Body>
                                <Title variant="h4">
                                    <span className="sub">{userData ? userData.first_name : ''}</span>
                                    <span> {userData ? userData.last_name : ''}</span>
                                </Title>
                                <CardText className='pt-3'>
                                    É necessário sempre acreditar que tudo é possível, sempre buscar pensamentos positivos apesar das horas turbulentas.
                                </CardText>
                                <Subtitle className="mb-2 text-muted">
                                    <span><i className="bi bi-geo-fill"></i> São Paulo</span>
                                </Subtitle>
                                <Subtitle className="mb-2 text-muted">
                                    <span><i className="bi bi-bookmark-heart-fill"></i> Viagens, Tecnologia, Natureza</span>
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
            {userData && <PageOverview />}
            <GridComponent />
        </div>
    );
}

export default Perfil;
