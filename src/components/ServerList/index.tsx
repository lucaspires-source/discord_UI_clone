import React from 'react'
import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'


const ServerList: React.FC = () => {
    return (
      
            <Container>
                <ServerButton isHome/>
                <Separator/>

                <ServerButton/>
                <ServerButton hasNotifications/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton mentions={589}/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton/>
                <ServerButton mentions={2}/>
                <ServerButton/>
                <ServerButton hasNotifications/>
            </Container>
    )
}

export default ServerList
