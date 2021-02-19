import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

const ListHeader = (props) => {
  return (
    <S.Container>
      <S.Content>{props.title}</S.Content>
    </S.Container>
  );
};

export default ListHeader;
