import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const DBreadcrumbs = () => {
  const location = useLocation();


  const breadcrumbNameMap = {
    '/': 'Register',
    '/login': 'Login',
    '/dashboard': 'Dashboard',
  };


  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: '45px 0px 5px 15px', margin:'5px' }}>
      {/* Root link or static breadcrumb */}
      <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
        Home
      </Link>


      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        const breadcrumbLabel = breadcrumbNameMap[to] || value;

        return isLast ? (
          <Typography key={to} color="text.primary">
            {breadcrumbLabel}
          </Typography>
        ) : (
          <Link
            key={to}
            to={to}
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            {breadcrumbLabel}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DBreadcrumbs;
