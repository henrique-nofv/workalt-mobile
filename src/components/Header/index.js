import React from 'react';
import {Text} from 'react-native';

import profileImg from '~/assets/images/profile-personal.jpg';

import * as S from './styles';

import {fonts} from '~/theme';

const Header = (props) => {
  const {title, cref, goToPerfil, buttonActive} = props;
  return (
    <S.Container>
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
      <S.Body>
        <S.Title>{title}</S.Title>
        {cref && (
          <S.Cref>
            <Text style={fonts.ubuntuBold}> CREF: </Text> {cref}
          </S.Cref>
        )}
        {buttonActive && (
          <S.Button onPress={goToPerfil}>
            <S.ButtonText>VER PERFIL</S.ButtonText>
          </S.Button>
        )}
      </S.Body>
    </S.Container>
  );
};

export default Header;
