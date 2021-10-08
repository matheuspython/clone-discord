import React from 'react';

import { 
  Container,
  HashtagIcon,
  InviteIcon,
  SettingsICon

} from './styles';


export interface Props{
  channelName:string
  selected?:boolean;
}


const ChannnelButton: React.FC<Props> = ({channelName, selected}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsICon />
      </div>
    </Container>
  );
}

export default ChannnelButton;