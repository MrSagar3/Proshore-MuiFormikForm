import React, { useState } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const InputPassword = ({
    label='Enter Password',
    varient='outlined',
    fullWidth=true,
    size='small',
    value,
    onChange,
    ...props
}) => {
  const [showPassword,setShowPassword]=useState(false)
  const handleTogglePassword =()=>{
    setShowPassword((prev)=>!prev)
  }
  return (
    <>
    <TextField
        label={label}
        variant={varient}
        type={showPassword ? 'text' : 'password'}
        fullWidth={fullWidth}
        value={value}
        size={size}
        onChange={onChange}
        {...props}
        InputProps={{
            startAdornment:(
                <InputAdornment position='start'>
                    <IconButton onClick={handleTogglePassword} edge='start'
                    disableRipple
                    sx={{
                      outline:'none',
                      '&:focus':{
                        outline:'none'
                      }
                    }}
                    >
                      {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </IconButton>
                </InputAdornment>
            ),
          }}
        />     
    </>
  )
}

export default InputPassword