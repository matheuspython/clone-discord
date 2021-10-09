import React from 'react';

import { Container, Role, User, Avatar } from './styles';
interface UserProps{
  nickname: string;
  isBot?:boolean;
}

const UserRow:React.FC<UserProps> = ({nickname, isBot}) =>{
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>
      
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="ruivorobadooooooooooooooooooooooo" />

      <Role>Offline - 22</Role>
      <UserRow nickname="noob 62" isBot />

      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />
      <UserRow nickname="fulano" />

    </Container>
  );
}

export default UserList;