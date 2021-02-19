import styled from "styled-components/native";
import { fonts } from "~/theme";

export const Container = styled.View`
  background-color: #0A0A0A;
  flex-direction: row;
  height: 142px;
  width: 100%;
`;

export const Profile = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-left: 10px;
`;

export const StartsWrapper = styled.View`
  background-color: #212121;
  border-radius: 20px;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 55%;
  top: 70%;
`;

export const Starts = styled.Text`
  color: #fff;
  font-size: 18px;
  ${fonts.ubuntu}
`;


export const Body = styled.View`
  flex:2;
  justify-content: center;
  align-content: center;
  padding-left: 5%;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: white;
    ${fonts.poppinsBold}
`;

export const Cref = styled.Text`
    font-size: 16px;
    color: white;
    ${fonts.poppins}
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 16px;
  margin-left: 3px;
  ${fonts.poppins};
  color: #671786;
`;
