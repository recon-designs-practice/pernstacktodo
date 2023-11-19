import React from 'react'
import Button from './Button'

export const Default = {
    render: args => <Button {...args} />,
    args: {
        label: 'CLick on mez'
    }
}

const meta = {
    title: 'Components/Button',
    component: Button
}

export default meta