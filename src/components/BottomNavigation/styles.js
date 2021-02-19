import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.View`
  background: #000;
  flex-direction: row;
  border-radius: 30px;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerShadow = styled(Container)`
  bottom: 10px;
  background-color: #671786;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
`;
