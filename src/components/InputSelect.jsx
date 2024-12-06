import React from 'react';
import { MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';

const InputSelect = ({ name, label, value, onChange, onBlur, options, error, helperText, variant='outlined',sx }) => {
  return (
    <FormControl sx={sx} error={error} size="small" fullWidth variant={variant}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        displayEmpty

      >
        <MenuItem value=" ">
  
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputSelect;
