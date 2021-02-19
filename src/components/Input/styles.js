import styled from 'styled-components/native';

import {fonts} from '~/theme';

export const Container = styled.View`
  width: 80%;
  margin: 10px 0px;
`;

export const Label = styled.Text`
  color: white;
  font-size: 18px;
  ${fonts.ubuntu};
`;

export const Input = styled.TextInput`
  font-size: 19px;
  color: white;
  ${fonts.ubuntu};
  border-bottom-width: 1px;
  border-style: solid;
  border-color: white;
`;
