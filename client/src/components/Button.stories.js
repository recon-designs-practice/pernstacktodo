import React from 'react'
import Button from './Button'

export const Default = {
  render: args => <Button {...args} />,
  args: {
    label: 'Click me'
  }
}

const meta = {
  title: 'Components/Button',
  component: Button
}

export default meta