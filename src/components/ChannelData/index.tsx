import React, {useRef, useEffect} from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { 
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon

} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container ref={messagesRef}>
      <Messages>
       
        {Array.from(Array(7).keys()).map(n =>(
          <ChannelMessage
            author="ruivoloiro"
            date="09/10/2020"
            content="oiiiiiiiiiiiii"
          />
        ))}

        <ChannelMessage
          author="ruivomoreno"
          date="09/10/2020"
          content={
            <>
              <Mention>RuivoRobado</Mention> boa tarde meu bom
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;