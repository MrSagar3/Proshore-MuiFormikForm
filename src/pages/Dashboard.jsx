import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CssBaseline, Stack, Container, Typography, Button, Link, Breadcrumbs, Grid2, Box } from '@mui/material';
import TextEditor from '../components/TextEditor';
import DBreadcrumbs from '../components/DBreadcrumbs';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.success('Logout successful');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundImage: 'url(/backgroundImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          padding: 0,
        }}
      >
        {/* Breadcrumbs Section */}
        <Box
  sx={{
    width: '100%',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  }}
>
  <DBreadcrumbs/>
</Box>



        {/* Dashboard Section */}
        <Grid2
          sx={{
            width: 1200,
            height: 600,
            bgcolor: '#E9DCC9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 1,
            marginTop: 2,
          }}
        >
          <Typography sx={{
            margin:'20px',
            fontSize:'30px',
            fontWeight:'bold',
          }}>Welcome, {user?.name}</Typography>
        <Typography sx={{
            margin:'10px',
            fontWeight:'bold',
          }}>Write what your heart says !</Typography>
          <Stack sx={{ width: '90%',
            maxHeight:'50%',
            overflow:'auto'
           }}>
            <TextEditor />
          </Stack>

          <Button
  onClick={handleLogout}
  sx={{
    marginTop: 2,
    backgroundColor: 'red',
    color: 'white',
    textTransform:'none' 
  }}
>
  Logout
</Button>

        </Grid2>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
