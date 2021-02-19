import styled from 'styled-components/native';

import {fonts, colors} from '~/theme';

export const Container = styled.TouchableOpacity`
  background-color: #000000;
  border-radius: 20px;
  padding: 10px;
  margin: 5px 0px;
`;

export const Badge = styled.View`
  width: 30%;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 5px;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-left: -10px;
  margin-top: -10px;
  background-color: #671786;
`;

export const BagdeTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-family: Poppins;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Profile = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-left: 15px;
  border-radius: 50px;
`;

export const StartsWrapper = styled.View`
  background-color: #212121;
  border-radius: 20px;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  left: 60%;
`;

export const Starts = styled.Text`
  color: #fff;
  font-size: 15px;
  ${fonts.ubuntu}
`;

export const NameText = styled.Text`
  color: white;
  font-size: 30px;
  text-align: left;
  margin-left: 0px;
  margin-top: 10px;
  ${fonts.poppinsBold}
`;

export const InfosWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  margin-left: 0px;
  width: 100%;
`;

/* Component info */
export const InfosView = styled.View`
  flex-direction: row;
  /* margin: 10px; */
  /* padding: 5px; */
  margin: 0px 5px;
  height: 30px;
  min-width: 80px;
  width: auto;
  padding-right: 8px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.56);
`;

export const Circle = styled.View`
  background-color: #671786;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const InfosText = styled.Text`
  color: white;
  font-size: 12px;
  line-height: 12px;
  margin-left: 3px;
  align-self: center;
  ${fonts.ubuntu}
`;

export const Tags = styled.Text`
  color: white;
  font-size: 16px;
  margin: 18px 15px 0px 15px;
  ${fonts.ubuntu}
`;

export const Description = styled.Text`
  color: #bebebb;
  font-size: 16px;
  text-align: left;
  margin: 5px 15px 0px 15px;
  ${fonts.ubuntu}
`;
