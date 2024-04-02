import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Lista(props) {
    // const { seguidores } = props;
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Maria Silva" src="https://www.dicasdemulher.com.br/wp-content/uploads/2020/06/capa-e-girl.png" />
            </ListItemAvatar>
            <ListItemText
            primary="Maria Silva"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                        <Button variant="contained" disableElevation size='small'>
                            Seguir
                        </Button>
                </Typography>
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />

        </List>
    );
}