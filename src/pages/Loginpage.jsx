import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { CssBaseline, Container, Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
// Custom Components
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import InputButton from '../components/InputButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Loginpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleSubmit = async (values) => {
    const apiUrl = 'http://localhost:3001/users';

    try {
      const response = await axios.get(apiUrl);
      const users = response.data;

      const user = users.find(
        (u) =>
          u.email === values.email &&
          u.password === values.password
      );

      if (user) {
        console.log('Login successful:', user);

        dispatch(login(user));

        navigate('/dashboard');
        toast.success('Login successful!');
      } else {
        toast.error('Invalid email or password. Please try again.')
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('An error occurred. Please try again later.');
    }
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
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: 500,
            bgcolor: 'white',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              color: '#0047AB',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Login
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
              <Form>
                <Stack
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: '100%',
                    padding: '20px',
                  }}
                >
                  <InputEmail
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    size="small"
                    sx={{
                      width: '300px',
                    }}
                  />

                  <InputPassword
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    size="small"
                    sx={{
                      width: '300px',
                    }}
                  />

                  <InputButton type="submit" disabled={!isValid}>
                    Login
                  </InputButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Loginpage;
