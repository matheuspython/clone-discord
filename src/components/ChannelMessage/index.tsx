import React from 'react';

import { Container, Avatar, Message, Header, Content  } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  content,
  date,
  hasMention,
  isBot}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
       <Avatar />
       <Message>
         
         <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
         </Header>

          <time>{date}</time>

         <Content>{content}</Content>
       </Message>
    </Container>
  );
}

export default ChannelMessage;