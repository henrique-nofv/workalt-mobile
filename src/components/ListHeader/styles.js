import styled from 'styled-components/native';
import {G, fonts} from '~/theme';

export const Container = styled.View`
  background-color: #0e0e0e;
  height: 62px;
  width: 100%;
  justify-content: center;
`;

export const Content = styled.Text`
  font-size: 16px;
  color: white;
  margin-left: 5%;
  ${fonts.poppins};
`;
