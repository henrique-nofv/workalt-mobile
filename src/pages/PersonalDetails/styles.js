import styled from 'styled-components/native';

import {G, fonts, colors} from '~/theme';

export const Container = styled(G.Container)`
  padding: 0px;
`;

export const Description = styled.Text`
  font-size: 14px;
  text-align: justify;
  color: rgba(255, 255, 255, 0.6);
  margin: 15px 5%;
  ${fonts.ubuntu};
`;

export const Circle = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 0px 5px;
  background-color: ${colors.purple};
  justify-content: center;
  align-items: center;
  align-self: center;
`;
