import styled from 'styled-components/native';

import { colors } from "~/theme";

export const Container = styled.View`
    background-color: ${colors.backgroundApp};
    flex: 1;
    /* height: 100%; */
`;

export const Header = styled.View`
  padding: 15px 21px;
  background: black;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardBox = styled.View`
background-color: black;
flex: 1;
height: 100%; 
`

export const ButtonBack = styled.TouchableOpacity`
`;

export const Logo = styled.Image`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;


export const Body = styled.View`
  flex: 1;
  marginTop: 30px;
  align-items: center;

`;

