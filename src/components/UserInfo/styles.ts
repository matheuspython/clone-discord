import styled from 'styled-components';
import {
  Mic, 
  Headset,
  Settings
} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow:rgba(0,0,0,0.2) 0 1px 0 0;
`;
export const Profile = styled.div`
 display: flex;
 align-items:center; 
 /* flex-direction: column; */

`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;
export const UserData = styled.div`
 
`;
export const Icons = styled.div`
 
`;
export const MicIcon = styled(Mic)`
 
`;
export const HeadphoneIcon = styled(Headset)`
 
`;
export const SettingsIcon = styled(Settings)`
 
`;
