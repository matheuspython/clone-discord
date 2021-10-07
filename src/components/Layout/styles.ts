import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71PX 240PX auto 240PX;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 
  "SL SN CI CI"
  "SL CL CD UL"
  "SL UI CD UL"
  ;
  height: 100%;
`;
