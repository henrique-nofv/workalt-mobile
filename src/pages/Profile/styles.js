import styled from 'styled-components/native';

import { colors } from "~/theme";

export const Container = styled.View`
    background-color: ${colors.backgroundApp};
    flex: 1;
    /* height: 100%; */
`;

export const Header = styled.View`
  margin: 15px 21px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ButtonBack = styled.TouchableOpacity`
`;

export const Logo = styled.Image`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;


export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

`;

