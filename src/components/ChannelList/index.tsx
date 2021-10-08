import React from 'react';
import ChannnelButton from '../ChannnelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
  <Container>
   <Category>
     <span>Canais de texto</span>
      <AddCategoryIcon />
   </Category>
   <ChannnelButton channelName="chat-livre" />
   <ChannnelButton channelName="trabalho" />
   <ChannnelButton channelName="lolzinho" />
   <ChannnelButton channelName="valorant" />
   <ChannnelButton channelName="csgo" />

  </Container>
  );
}

export default ChannelList;