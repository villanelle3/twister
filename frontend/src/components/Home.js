import React, { useEffect, useState } from 'react';
import AxiosInstance from './Axios';
import Tweet from './Tweet';

function Home() {
    
    const [postsData, setPostsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    const GetPostAndUserData = () => {
        AxiosInstance.get('posts/').then((res) => {
            setPostsData(res.data);
        });
        AxiosInstance.get('user/').then((res) => {
            setUsersData(res.data);
        });
    };

    useEffect(() => {
        GetPostAndUserData();
    }, []);

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div>
            {postsData.slice().reverse().map((item) => {
                const userIndex = usersData.findIndex(user => user.id === item.dono); // Encontrar o índice do usuário correspondente
                return (
                    <Tweet
                        key={item.id}
                        autor={`${usersData[userIndex]?.first_name} ${usersData[userIndex]?.last_name}`}
                        data={formatDate(item.data)}
                        texto={item.texto}
                        likes={item.like_count}
                        replies={8}
                        foto="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png"
                        user_id = {userIndex}
                    />
                );
            })}
        </div>
    );
}

export default Home;
