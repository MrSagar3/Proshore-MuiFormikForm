import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider,DatePicker  } from '@mui/x-date-pickers';

const InputDate = ({
    value,
    onChange,
    sx
}) => {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of birth"
        value={value}
        onChange={onChange}
      
        slotProps={{
          textField: {
            helperText: 'MM/DD/YYYY',
            size:'small',
            sx:sx
          },         
        }}
      disableFuture
      />
    </LocalizationProvider>
    </>
  )
}

export default InputDate