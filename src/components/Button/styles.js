import styled from 'styled-components/native';

import {fonts, colors} from '~/theme';

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor || '#0D0D0D' };
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  ${fonts.poppinsBold};
`;
