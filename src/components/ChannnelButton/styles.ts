import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  transition:.2s;
  div{
    display:flex;
    align-items:center;
    span{
      font-size:15px;
      margin-left:5px;
      color:var(--senary);
    }
  }
  &:hover{
    background-color:var(--quinary);
    >div span{
      color:var(--white);
    }
  }

`;
export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height:20px;

  color:var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
   width: 16px;
  height:16px;

  color: var(--symbol);
  cursor:pointer;
  transition:.2s;
  &:hover{
    color: var(--white);
  }
`;
export const SettingsICon = styled(Settings)`
    width: 16px;
    height:16px;
    margin-left:4px;
 cursor:pointer;
  transition:.2s;
  &:hover{
    color: var(--white);
  }
`;
