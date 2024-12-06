import React from 'react'
import { TextField,InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
const InputEmail = ({
    label='Enter Email',
    varient='outlined',
    fullWidth=true,
    size='small',
    value,
    onChange,
    ...props
}) => {
  return (
    <>
        <TextField
        label={label}
        variant={varient}
        fullWidth={fullWidth}
        value={value}
        size={size}
        onChange={onChange}
        {...props}
        InputProps={{
            startAdornment:(
                <InputAdornment position='start'>
                    <EmailIcon/>
                </InputAdornment>
            ),
          }}
        />     
    </>
  )
}

export default InputEmail