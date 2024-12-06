import React from 'react';
import Button from '@mui/material/Button';

const InputButton = ({ children, disabled, type, }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default InputButton;
