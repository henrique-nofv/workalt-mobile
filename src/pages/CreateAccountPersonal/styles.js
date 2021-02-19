const { default: styled } = require("styled-components/native");

import {G} from '~/theme';

export const Container = styled(G.Container)`
  padding: 0px;
  background-color: #151515;
`;

export const LogoImage = styled.Image`
  margin: 12% 5%;
  align-self: center;
`;
