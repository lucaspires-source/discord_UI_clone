import React from 'react'
import {Container,Role,User,Avatar} from './styles'
interface UserProps {
    nickname:string;
}

const UserRow: React.FC<UserProps> = ({nickname}) =>{
    return(
        <User>
            <Avatar />
            <strong>{nickname}</strong>
        </User>
    )
}


const UserList: React.FC = () => {
    return (

        <Container>
            <Role>Online - 1</Role>
            <UserRow nickname="Lucas Pires"/>
            <Role>Offline - 10</Role>
            <UserRow nickname="Diego Martins"/>
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>        
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>
            <UserRow nickname="Diego Martins"/>
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>        
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>
            <UserRow nickname="Diego Martins"/>
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>        
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>     
            <UserRow nickname="João Ninguém"/>  
            <UserRow nickname="João Ninguém"/>      
        </Container>

    )
}

export default UserList
