import styled from 'styled-components/native';
import {List} from 'react-native-paper';
import {fonts} from '~/theme';

export const Container = styled.View`
  background-color: #151515;
  flex: 1;
  padding: 10px;
`;

export const ChatItem = styled(List.Item)`
  background-color: #151515;
  flex: 1;
  padding: 10px;
`;

