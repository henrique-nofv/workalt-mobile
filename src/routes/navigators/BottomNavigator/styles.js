import styled from 'styled-components/native';
import {fonts} from '~/theme';

export const Navigator = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 20px;
  height: 59px;
  width: 90%;
  border-radius: 30px;
  background-color: #000;
  align-items: center;
  justify-content: center;
  align-self: center;
  shadow-color: #671786;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 2;
`;

export const Action = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  background-color: #000000;
  align-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 700;
`;
