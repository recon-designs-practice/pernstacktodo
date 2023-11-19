import React from 'react'
import Button from './Button'

export const Default = {
    render: args => <Button {...args} />,
    args: {
        label: 'Send',
        onclick: () => alert('Button was clicked.')
    }
}

const meta = {
    title: 'Components/Button',
    component: Button
}

export default meta