import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Home, Chat, Train} from './icons';

import * as S from './styles';

export default function BottomNavigation(props) {
  return (
    <S.Wrapper>
      <S.ContainerShadow />
      <S.Container color="#00FFFF">
        <TouchableOpacity>
          <Train />
        </TouchableOpacity>
        <TouchableOpacity>
          <Home active />
        </TouchableOpacity>
        <TouchableOpacity>
          <Chat />
        </TouchableOpacity>
      </S.Container>
    </S.Wrapper>
  );
}
