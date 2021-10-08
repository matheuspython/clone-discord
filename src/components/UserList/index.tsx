import React from 'react';

import { Container, Role, User, Avatar } from './styles';
interface UserProps{
  nickname: string;
  isBot?:boolean;
}

const UserRow:React.FC<UserProps> = ({nickname, isBot}) =>{
  return(
    <User>
      <Avatar />

      <strong>{nickname}</strong>
      
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="ruivorobado" />

      <Role>Offline - 22</Role>
      <UserRow nickname="noob 62" isBot />


    </Container>
  );
}

export default UserList;