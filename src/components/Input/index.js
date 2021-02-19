import React from 'react';
import { TextInput, Text, View } from 'react-native';

import * as S from './styles';

function Input(props) {
  const {label} = props;
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input  />
    </S.Container>
  );
}

export default Input;
