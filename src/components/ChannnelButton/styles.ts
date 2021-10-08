import styled from 'styled-components';
// import { Hashtag } from 'styled-icons/heroicons-outline'

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
export const HashtagIcon = styled.div`
  
`;
export const InviteIcon = styled.div`
  
`;
export const SettingsICon = styled.div`
  
`;
