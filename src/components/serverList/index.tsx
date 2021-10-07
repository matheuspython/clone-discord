import React from 'react';
import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const serverList: React.FC = () => {
  return (
  <Container>
    <ServerButton isHome />
    <Separator />

    <ServerButton />
    <ServerButton hasNotifications />
    <ServerButton mentions={3}/>
    <ServerButton />
    <ServerButton mentions={52}/>
    <ServerButton />
    <ServerButton mentions={23}/>
    <ServerButton hasNotifications/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton />


  </Container>
  );
}

export default serverList;