import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

const InputCheckbox = ({
  name,
  label,
  checked,
  onChange,
  onBlur,
  error,
  helperText,
  labelSx,
  checkboxSx,
  sx
}) => {
  return (
    <FormGroup sx={sx}>
      <FormControlLabel
        control={<Checkbox name={name} checked={checked} onChange={onChange} onBlur={onBlur} sx={checkboxSx} />}
        label={label}
        sx={labelSx}
      />
      {error && <FormHelperText error>{helperText}</FormHelperText>} {/* Display error if any */}
    </FormGroup>
  );
};

export default InputCheckbox;
