import React from 'react'
import { Button as MuiButton } from '@mui/material'

export default function Button(props) {
  return (
    <MuiButton variant='contained'>{props.label}</MuiButton>
  )
}
