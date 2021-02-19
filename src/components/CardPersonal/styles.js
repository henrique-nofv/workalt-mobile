import styled from 'styled-components/native';

import {fonts, colors} from '~/theme';
import {Dimensions} from 'react-native';

export const Container = styled.TouchableOpacity`
  background-color: #0c0c0c;
  border-radius: 20px;
  width: ${Dimensions.get('screen').width / 2 + 'px'};
  height: 190px;
  margin: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const Profile = styled.View`
  flex: 0.6;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const StartsWrapper = styled.View`
  background-color: #212121;
  border-radius: 20px;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  left: 60%;
`;

export const Starts = styled.Text`
  color: #fff;
  font-size: 12px;
  ${fonts.ubuntu}
`;

export const NameText = styled.Text`
  flex: 1;
  align-items: center;
  color: white;
  font-size: 25px;
  margin-left: 7px;
  margin-top: 10px;
  ${fonts.poppinsBold}
`;

export const InfosWrapper = styled.View`
  margin: 10px 10px;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  width: 100%;
`;

/* Component info */
export const InfosView = styled.View`
  flex-direction: row;
  /* margin: 10px; */
  /* padding: 5px; */
  margin: 0px 5px;
  height: 30px;
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

export const Button = styled.TouchableOpacity`
  background-color: #671786;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 100%;
  align-content: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  align-self: center;
  margin: 15px;
`;
