import React from 'react'

export default function Button(props) {
  return (
    <button style={{ border: '2px solid orange' }} className='font-bold p-4 bg-slate-100'>{props.label}</button>
  )
}
