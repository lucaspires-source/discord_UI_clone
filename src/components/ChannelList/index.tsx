import React from 'react'
import ChannelButton from '../ChannelButton'
import {Container,Category,AddIcon} from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddIcon/>
            </Category>
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="yakuza 0" />
            <ChannelButton channelName="Jogabilidade" />
            <ChannelButton channelName="nfl" />
            <ChannelButton channelName="nba" />
            <ChannelButton channelName="Formula 1" />
            <ChannelButton channelName="Star wars" />
            <ChannelButton channelName="Naruto" />
            <ChannelButton channelName="valorant" />

        </Container>

    )
}

export default ChannelList
