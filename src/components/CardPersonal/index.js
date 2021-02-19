import React from 'react';
import {View, Text, Image} from 'react-native';

import * as S from './styles';

import profileImg from '~/assets/images/profile-personal.jpg';
import iconMoney from '~/assets/images/icon-money.png';
import iconCalendar from '~/assets/images/icon-calendar.png';
import iconLocation from '~/assets/images/icon-location.png';
import iconHour from '~/assets/images/icon-hour.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const location = '15km';

const CardPersonal = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Profile>
          <S.ProfileImage
            source={profileImg}
            resizeMethod="scale"
            resizeMode="cover"
          />
          <S.StartsWrapper>
            <S.Starts>4,5</S.Starts>
          </S.StartsWrapper>
        </S.Profile>
        <S.NameText>Thomas Turing</S.NameText>
      </S.Header>
      <S.Tags>Musculação • Hipertrofia</S.Tags>
      <S.InfosWrapper>
        <Info iconImg={iconMoney} text="14h - 16h" />
        <Info iconImg={iconCalendar} text="25/02" />
      </S.InfosWrapper>
      <S.Button>
        <S.ButtonText>Iniciar Chat Privado</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export const Info = (props) => {
  const {iconImg, text} = props;
  return (
    <S.InfosView>
      <S.Circle>
        <Image source={iconImg} />
      </S.Circle>
      <S.InfosText>{text}</S.InfosText>
    </S.InfosView>
  );
};

export default CardPersonal;
