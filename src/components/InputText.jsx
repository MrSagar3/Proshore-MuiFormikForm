import React from 'react';
import { TextField,InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const InputText = ({
	label='Enter text',
	varient='outlined',
	fullWidth=true,
	size='small',
	value,
	onChange,
	...props
  }) =>  {
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
				<AccountCircleIcon/>
			</InputAdornment>
		),
	  }}
	  />
	  </>
	);
  }
  
  export default InputText;
  