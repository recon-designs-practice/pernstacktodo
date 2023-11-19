import React from 'react'
import { TextField as MuiTextField } from '@mui/material'

export default function Input(props) {
  return (
    <MuiTextField id={props.id} variant='outlined' value={props.value} onChange={props.onchange} />
  )
}
