import React from 'react'
import {Container,Messages,Input,InputIcon,InputWrapper} from './styles'

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages/>
            <InputWrapper>
                <Input/>
                <InputIcon/>
            </InputWrapper>
        </Container>

    )
}

export default ChannelData
