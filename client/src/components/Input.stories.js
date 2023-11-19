import React from 'react'
import Input from './Input'

const InputTemplate = (storyArgs) => {
    const [inputValue, setInputValue] = React.useState(null)

    return (
        <Input value={inputValue} onchange={(e) => setInputValue(e.target.value)} {...storyArgs} />
    )
}

export const Default = {
    render: args => <InputTemplate {...args} />,
    args: {
        id: 'inputId'
    }
}

const meta = {
    title: 'Components/Input',
    component: Input
}

export default meta