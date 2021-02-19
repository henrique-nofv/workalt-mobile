import React from 'react';
import {View, Text, Image} from 'react-native';

import * as S from './styles';

import profileImg from '~/assets/images/profile-personal.jpg';
import iconMoney from '~/assets/images/icon-money.png';
import iconCalendar from '~/assets/images/icon-calendar.png';
import iconLocation from '~/assets/images/icon-location.png';
import {AirbnbRating} from 'react-native-ratings';

const CardStudent = (props) => {
  return (
    <S.Container onPress={props.onPress}>
      {props.bagde && (
        <S.Badge>
          <S.BagdeTitle>{props.bagde}</S.BagdeTitle>
        </S.Badge>
      )}
      <S.Header>
        <S.Profile>
          <S.ProfileImage
            source={profileImg}
            resizeMethod="scale"
            resizeMode="cover"
          />
          {!props.rating && (
            <S.StartsWrapper>
              <S.Starts>4,5</S.Starts>
            </S.StartsWrapper>
          )}
        </S.Profile>
        <View
          style={{
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            flex: 2.5,
          }}>
          <S.NameText>Thomas Turing</S.NameText>
          <S.InfosWrapper>
            {props.rating ? (
              <AirbnbRating
                isDisabled
                showRating={false}
                useNativeDriver={true}
                count={5}
                defaultRating={4}
                selectedColor="#671786"
                size={15}
              />
            ) : (
              <>
                <Info iconImg={iconMoney} text={'R$' + (props.price || 150)} />
                <Info iconImg={iconCalendar} text={props.date || '25/04'} />
                {props.distance && (
                  <Info iconImg={iconLocation} text={props.distance + 'km'} />
                )}
              </>
            )}
          </S.InfosWrapper>
        </View>
      </S.Header>
      <S.Tags>{props.description || 'Musculação • Hipertrofia'}</S.Tags>
      <S.Description>
        Treino incrivel para todos os músculos do corpo, uma aula feita com
        excelêcia por um profissional
      </S.Description>
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

export default CardStudent;
