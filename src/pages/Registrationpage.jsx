import React from 'react';
import { CssBaseline, Container, Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Custom Components
import InputText from '../components/InputText';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import InputSelect from '../components/InputSelect';
import InputCheckbox from '../components/InputCheckbox';
import InputButton from '../components/InputButton';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
  agreeTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  agreeTerms: false,
};

const apiUrl='http://localhost:3001/users'
const Registrationpage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(apiUrl, values);
      console.log('Data saved successfully', response.data);
  
     
      toast.success('Registration successful! Please login.');
  
      navigate('/login');
    } catch (error) {
      console.error('Error saving data', error);
  

      toast.error('Failed to register. Please try again.');
    }
  };
  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];

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
            Registration Form
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
                  <InputText
                    name="name"
                    label="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    size="small"
                    sx={{
                      width: '300px',
                    }}
                  />

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

                  <InputPassword
                    name="confirmPassword"
                    label="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    size="small"
                    sx={{
                      width: '300px',
                    }}
                  />
                  <InputSelect
                    name="gender"
                    label="Choose gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={options}
                    error={touched.gender && Boolean(errors.gender)}
                    helperText={touched.gender && errors.gender}
                    sx={{
                      width: '300px',
                    }}
                  />

                  <InputCheckbox
                    name="agreeTerms"
                    label="I agree to the terms and conditions."
                    checked={values.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.agreeTerms && Boolean(errors.agreeTerms)}
                    helperText={touched.agreeTerms && errors.agreeTerms}
                    sx={{
                      margin: '2px',
                    }}
                  />

                  <InputButton
                    type="submit"
                    disabled={!isValid}
                  >
                    Register
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

export default Registrationpage;
